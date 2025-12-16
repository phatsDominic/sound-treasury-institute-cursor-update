@echo off
REM One-command deploy for Windows (avoids PowerShell npm.ps1 execution policy issues).
node scripts\deploy.mjs %*

