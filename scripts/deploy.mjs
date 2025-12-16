import { spawnSync } from "node:child_process";

function run(cmd, args, { dryRun = false } = {}) {
  const pretty = [cmd, ...args].join(" ");
  if (dryRun) {
    console.log(`[dry-run] ${pretty}`);
    return { status: 0, stdout: "", stderr: "" };
  }

  const res = spawnSync(cmd, args, { encoding: "utf8", stdio: "pipe" });
  if (res.stdout) process.stdout.write(res.stdout);
  if (res.stderr) process.stderr.write(res.stderr);
  return res;
}

function must(res, what) {
  if (res.status !== 0) {
    const msg = what ? `Failed: ${what}` : "Command failed";
    throw new Error(msg);
  }
}

function getStdout(cmd, args) {
  const res = spawnSync(cmd, args, { encoding: "utf8", stdio: "pipe" });
  return { status: res.status ?? 1, out: (res.stdout ?? "").trim() };
}

function parseArgs(argv) {
  const args = {
    message: "Update site",
    all: false,
    dryRun: false,
    branch: undefined,
  };

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--all") args.all = true;
    else if (a === "--dry-run") args.dryRun = true;
    else if (a === "-m" || a === "--message") args.message = argv[++i] ?? args.message;
    else if (a === "--branch") args.branch = argv[++i];
    else if (a === "-h" || a === "--help") {
      console.log(
        [
          "Usage:",
          "  node scripts/deploy.mjs [options]",
          "",
          "Options:",
          "  -m, --message <msg>   Commit message (default: \"Update site\")",
          "  --all                 Include untracked files (git add -A). Default stages tracked changes only.",
          "  --branch <name>        Push to this branch (default: current branch)",
          "  --dry-run              Print what would run without changing anything",
        ].join("\n")
      );
      process.exit(0);
    }
  }
  return args;
}

const opts = parseArgs(process.argv.slice(2));

// Validate we're in a git repo
{
  const { status, out } = getStdout("git", ["rev-parse", "--is-inside-work-tree"]);
  if (status !== 0 || out !== "true") {
    console.error("Not inside a git repository.");
    process.exit(1);
  }
}

// Determine branch
if (!opts.branch) {
  const { out } = getStdout("git", ["branch", "--show-current"]);
  opts.branch = out || "main";
}

// Ensure origin exists
{
  const { status, out } = getStdout("git", ["remote", "get-url", "origin"]);
  if (status !== 0 || !out) {
    console.error('Missing git remote "origin". Add it first, then rerun.');
    process.exit(1);
  }
}

// See if anything changed
{
  const { out } = getStdout("git", ["status", "--porcelain=v1"]);
  if (!out) {
    console.log("No changes to deploy.");
    process.exit(0);
  }
}

// In dry-run, print what would be included and what would run, without staging/committing.
if (opts.dryRun) {
  const trackedChanged = getStdout("git", ["diff", "--name-only"]).out
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
  const untracked = getStdout("git", ["ls-files", "--others", "--exclude-standard"]).out
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  const wouldInclude = opts.all ? [...trackedChanged, ...untracked] : trackedChanged;

  console.log("[dry-run] Would include files:");
  if (wouldInclude.length === 0) {
    console.log("  (none)");
    console.log("[dry-run] Only untracked files exist. Re-run with --all to include them.");
  } else {
    for (const f of wouldInclude) console.log(`  - ${f}`);
  }

  const stageArgs = opts.all ? ["add", "-A"] : ["add", "-u"];
  console.log(`[dry-run] git ${stageArgs.join(" ")}`);
  console.log(`[dry-run] git commit -m "${opts.message.replaceAll('"', '\\"')}"`);
  console.log(`[dry-run] git push origin ${opts.branch}`);
  process.exit(0);
}

// Stage changes safely
// - default: tracked changes only (avoids accidentally committing random new files)
// - --all: include untracked files too
{
  const stageArgs = opts.all ? ["add", "-A"] : ["add", "-u"];
  const res = run("git", stageArgs, { dryRun: opts.dryRun });
  must(res, `git ${stageArgs.join(" ")}`);
}

// Ensure we have staged changes (if you only had untracked files and didn't pass --all, there will be nothing staged)
{
  const { out } = getStdout("git", ["diff", "--cached", "--name-only"]);
  if (!out) {
    console.log("Nothing staged. If you want to include new (untracked) files, rerun with --all.");
    process.exit(0);
  }
}

// Commit
{
  const res = run("git", ["commit", "-m", opts.message], { dryRun: opts.dryRun });
  must(res, "git commit");
}

// Push
{
  const res = run("git", ["push", "origin", opts.branch], { dryRun: opts.dryRun });
  must(res, "git push");
}

console.log(`Done. Vercel will deploy the latest push to "${opts.branch}".`);


