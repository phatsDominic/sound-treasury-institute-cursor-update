export const START_YEAR = 2016;

type Asset = {
  symbol: string;
  name: string;
  color: string;
  yahooSymbol?: string;
  googleSymbol?: string;
};

type SectorConfig = {
  label: string;
  assets: Asset[];
  staticHistory: Record<number, Record<string, { start: number; end: number } | null>>;
};

export const SECTOR_CONFIG: Record<'chemicals' | 'agriculture' | 'automotive' | 'energy', SectorConfig> = {
  chemicals: {
    label: 'Chemicals',
    assets: [
      { symbol: 'BTC-USD', name: 'Bitcoin', color: '#f7931a', googleSymbol: 'CURRENCY:BTC-USD' },
      { symbol: 'DOW', name: 'Dow Inc.', color: '#C8102E', googleSymbol: 'NYSE:DOW' },
      { symbol: 'BASFY', name: 'BASF (ADR)', color: '#004A96', googleSymbol: 'OTCMKTS:BASFY' },
      { symbol: 'CE', name: 'Celanese', color: '#008542', googleSymbol: 'NYSE:CE' },
      { symbol: 'MEOH', name: 'Methanex', color: '#582C83', googleSymbol: 'NASDAQ:MEOH' },
      { symbol: 'FSCHX', name: 'Fidelity Chem', color: '#71c7ec', googleSymbol: 'MUTF:FSCHX' }
    ],
    staticHistory: {
      2016: { 'BTC-USD': { start: 434, end: 963 }, DOW: null, BASFY: { start: 16.5, end: 20.8 }, CE: { start: 66, end: 78.5 }, MEOH: { start: 27.77, end: 45.95 }, FSCHX: { start: 12.12, end: 14.91 } },
      2017: { 'BTC-USD': { start: 963, end: 13860 }, DOW: null, BASFY: { start: 20.8, end: 27.5 }, CE: { start: 78.5, end: 107 }, MEOH: { start: 45.95, end: 54.15 }, FSCHX: { start: 14.91, end: 18.42 } },
      2018: { 'BTC-USD': { start: 13860, end: 3740 }, DOW: null, BASFY: { start: 27.5, end: 17.2 }, CE: { start: 107, end: 90 }, MEOH: { start: 54.15, end: 64.49 }, FSCHX: { start: 18.42, end: 14.42 } },
      2019: { 'BTC-USD': { start: 3740, end: 7200 }, DOW: { start: 51.63, end: 54.73 }, BASFY: { start: 17.2, end: 19.5 }, CE: { start: 90, end: 123 }, MEOH: { start: 64.49, end: 35.42 }, FSCHX: { start: 14.42, end: 11.95 } },
      2020: { 'BTC-USD': { start: 7200, end: 28990 }, DOW: { start: 46.07, end: 55.5 }, BASFY: { start: 19.5, end: 17.8 }, CE: { start: 123, end: 129 }, MEOH: { start: 35.42, end: 45.45 }, FSCHX: { start: 11.95, end: 12.26 } },
      2021: { 'BTC-USD': { start: 28990, end: 46200 }, DOW: { start: 55.5, end: 56.72 }, BASFY: { start: 17.8, end: 19.2 }, CE: { start: 129, end: 168 }, MEOH: { start: 45.45, end: 39.55 }, FSCHX: { start: 12.26, end: 16.76 } },
      2022: { 'BTC-USD': { start: 46200, end: 16530 }, DOW: { start: 59.73, end: 50.39 }, BASFY: { start: 19.2, end: 13.5 }, CE: { start: 168, end: 102.2 }, MEOH: { start: 39.55, end: 37.86 }, FSCHX: { start: 16.76, end: 15.81 } },
      2023: { 'BTC-USD': { start: 16530, end: 42260 }, DOW: { start: 59.35, end: 54.84 }, BASFY: { start: 13.5, end: 15.2 }, CE: { start: 102.2, end: 155.3 }, MEOH: { start: 37.86, end: 47.36 }, FSCHX: { start: 15.81, end: 15.41 } },
      2024: { 'BTC-USD': { start: 42260, end: 98000 }, DOW: { start: 53.6, end: 40.13 }, BASFY: { start: 15.2, end: 12.44 }, CE: { start: 146.14, end: 68.76 }, MEOH: { start: 45.58, end: 49 }, FSCHX: { start: 14.78, end: 13.53 } }
    }
  },
  agriculture: {
    label: 'Agriculture',
    assets: [
      { symbol: 'BTC-USD', name: 'Bitcoin', color: '#f7931a', googleSymbol: 'CURRENCY:BTC-USD' },
      { symbol: 'ADM', name: 'ADM', color: '#005eb8', googleSymbol: 'NYSE:ADM' },
      { symbol: 'BG', name: 'Bunge', color: '#002d72', googleSymbol: 'NYSE:BG' },
      { symbol: 'DE', name: 'Deere', color: '#367C2B', googleSymbol: 'NYSE:DE' },
      { symbol: 'MOS', name: 'Mosaic', color: '#e37e26', googleSymbol: 'NYSE:MOS' },
      { symbol: 'CF', name: 'CF Ind', color: '#008542', googleSymbol: 'NYSE:CF' }
    ],
    staticHistory: {
      2016: { 'BTC-USD': { start: 434, end: 963 }, ADM: { start: 26.23, end: 34.95 }, BG: { start: 46.11, end: 55.19 }, DE: { start: 65.43, end: 89.51 }, MOS: { start: 20.05, end: 25.41 }, CF: { start: 22.57, end: 24.79 } },
      2017: { 'BTC-USD': { start: 963, end: 13860 }, ADM: { start: 33.88, end: 31.64 }, BG: { start: 52.87, end: 52.56 }, DE: { start: 93.54, end: 138.87 }, MOS: { start: 27.18, end: 22.75 }, CF: { start: 27.79, end: 34.77 } },
      2018: { 'BTC-USD': { start: 13860, end: 3740 }, ADM: { start: 33.9, end: 33.31 }, BG: { start: 62.23, end: 43.1 }, DE: { start: 148.22, end: 134.66 }, MOS: { start: 24.23, end: 25.99 }, CF: { start: 34.69, end: 36.55 } },
      2019: { 'BTC-USD': { start: 3740, end: 7200 }, ADM: { start: 36.5, end: 39 }, BG: { start: 44.42, end: 48.18 }, DE: { start: 148.82, end: 159.43 }, MOS: { start: 28.74, end: 19.38 }, CF: { start: 36.67, end: 41.21 } },
      2020: { 'BTC-USD': { start: 7200, end: 28990 }, ADM: { start: 37.66, end: 43.85 }, BG: { start: 43.89, end: 57.29 }, DE: { start: 146.56, end: 252.2 }, MOS: { start: 17.82, end: 20.86 }, CF: { start: 34.77, end: 34.71 } },
      2021: { 'BTC-USD': { start: 28990, end: 46200 }, ADM: { start: 43.51, end: 60.22 }, BG: { start: 57.17, end: 83.57 }, DE: { start: 271.49, end: 324.93 }, MOS: { start: 23.59, end: 35.92 }, CF: { start: 37.11, end: 64.97 } },
      2022: { 'BTC-USD': { start: 46200, end: 16530 }, ADM: { start: 66.82, end: 84.3 }, BG: { start: 88.5, end: 91.33 }, DE: { start: 357.77, end: 411.42 }, MOS: { start: 36.6, end: 40.6 }, CF: { start: 63.22, end: 79.46 } },
      2023: { 'BTC-USD': { start: 16530, end: 42260 }, ADM: { start: 75.22, end: 67.09 }, BG: { start: 90.71, end: 94.79 }, DE: { start: 406.88, end: 388.54 }, MOS: { start: 45.85, end: 33.74 }, CF: { start: 78.99, end: 75.69 } },
      2024: { 'BTC-USD': { start: 42260, end: 98000 }, ADM: { start: 51.63, end: 48.62 }, BG: { start: 82.72, end: 75.13 }, DE: { start: 383.83, end: 417.83 }, MOS: { start: 29.17, end: 23.86 }, CF: { start: 71.89, end: 83.31 } }
    }
  },
  automotive: {
    label: 'Automotive',
    assets: [
        { symbol: 'BTC-USD', name: 'Bitcoin', color: '#f7931a', googleSymbol: 'CURRENCY:BTC-USD' },
        { symbol: 'TM', name: 'Toyota', color: '#EB0A1E', googleSymbol: 'NYSE:TM' },
        { symbol: 'F', name: 'Ford', color: '#003478', googleSymbol: 'NYSE:F' },
        { symbol: 'GM', name: 'GM', color: '#2462D1', googleSymbol: 'NYSE:GM' },
        { symbol: 'HMC', name: 'Honda', color: '#CC0000', googleSymbol: 'NYSE:HMC' }
    ],
    staticHistory: {
        2016: { 'BTC-USD': { start: 434, end: 963 }, TM: { start: 122.5, end: 118.5 }, F: { start: 14.0, end: 12.1 }, GM: { start: 34.0, end: 34.8 }, HMC: { start: 30.5, end: 29.5 } },
        2017: { 'BTC-USD': { start: 963, end: 13860 }, TM: { start: 118.5, end: 126.5 }, F: { start: 12.1, end: 12.5 }, GM: { start: 34.8, end: 40.9 }, HMC: { start: 29.5, end: 34.2 } },
        2018: { 'BTC-USD': { start: 13860, end: 3740 }, TM: { start: 126.5, end: 116.0 }, F: { start: 12.5, end: 7.6 }, GM: { start: 40.9, end: 33.4 }, HMC: { start: 34.2, end: 26.3 } },
        2019: { 'BTC-USD': { start: 3740, end: 7200 }, TM: { start: 116.0, end: 140.5 }, F: { start: 7.6, end: 9.3 }, GM: { start: 33.4, end: 36.6 }, HMC: { start: 26.3, end: 28.4 } },
        2020: { 'BTC-USD': { start: 7200, end: 28990 }, TM: { start: 140.5, end: 154.0 }, F: { start: 9.3, end: 8.8 }, GM: { start: 36.6, end: 41.6 }, HMC: { start: 28.4, end: 29.0 } },
        2021: { 'BTC-USD': { start: 28990, end: 46200 }, TM: { start: 154.0, end: 185.0 }, F: { start: 8.8, end: 20.8 }, GM: { start: 41.6, end: 58.6 }, HMC: { start: 29.0, end: 28.6 } },
        2022: { 'BTC-USD': { start: 46200, end: 16530 }, TM: { start: 185.0, end: 136.5 }, F: { start: 20.8, end: 11.6 }, GM: { start: 58.6, end: 33.6 }, HMC: { start: 28.6, end: 22.6 } },
        2023: { 'BTC-USD': { start: 16530, end: 42260 }, TM: { start: 136.5, end: 181.0 }, F: { start: 11.6, end: 12.2 }, GM: { start: 33.6, end: 35.9 }, HMC: { start: 22.6, end: 31.0 } },
        2024: { 'BTC-USD': { start: 42260, end: 98000 }, TM: { start: 181.0, end: 200.0 }, F: { start: 12.2, end: 10.5 }, GM: { start: 35.9, end: 45.0 }, HMC: { start: 31.0, end: 33.5 } }
    }
  },
  energy: {
    label: 'Energy',
    assets: [
        { symbol: 'BTC-USD', name: 'Bitcoin', color: '#f7931a', googleSymbol: 'CURRENCY:BTC-USD' },
        { symbol: 'XOM', name: 'ExxonMobil', color: '#FF0000', googleSymbol: 'NYSE:XOM' },
        { symbol: 'CVX', name: 'Chevron', color: '#0066B2', googleSymbol: 'NYSE:CVX' },
        { symbol: 'SHEL', name: 'Shell', color: '#FBCE07', googleSymbol: 'NYSE:SHEL' },
        { symbol: 'TTE', name: 'TotalEnergies', color: '#ED0000', googleSymbol: 'NYSE:TTE' }
    ],
    staticHistory: {
        2016: { 'BTC-USD': { start: 434, end: 963 }, XOM: { start: 77.0, end: 90.0 }, CVX: { start: 85.0, end: 117.0 }, SHEL: { start: 46.0, end: 54.0 }, TTE: { start: 45.0, end: 51.0 } },
        2017: { 'BTC-USD': { start: 963, end: 13860 }, XOM: { start: 90.0, end: 83.0 }, CVX: { start: 117.0, end: 125.0 }, SHEL: { start: 54.0, end: 66.0 }, TTE: { start: 51.0, end: 56.0 } },
        2018: { 'BTC-USD': { start: 13860, end: 3740 }, XOM: { start: 83.0, end: 68.0 }, CVX: { start: 125.0, end: 108.0 }, SHEL: { start: 66.0, end: 58.0 }, TTE: { start: 56.0, end: 52.0 } },
        2019: { 'BTC-USD': { start: 3740, end: 7200 }, XOM: { start: 68.0, end: 69.0 }, CVX: { start: 108.0, end: 120.0 }, SHEL: { start: 58.0, end: 59.0 }, TTE: { start: 52.0, end: 55.0 } },
        2020: { 'BTC-USD': { start: 7200, end: 28990 }, XOM: { start: 69.0, end: 41.0 }, CVX: { start: 120.0, end: 84.0 }, SHEL: { start: 59.0, end: 35.0 }, TTE: { start: 55.0, end: 41.0 } },
        2021: { 'BTC-USD': { start: 28990, end: 46200 }, XOM: { start: 41.0, end: 61.0 }, CVX: { start: 84.0, end: 117.0 }, SHEL: { start: 35.0, end: 44.0 }, TTE: { start: 41.0, end: 49.0 } },
        2022: { 'BTC-USD': { start: 46200, end: 16530 }, XOM: { start: 61.0, end: 110.0 }, CVX: { start: 117.0, end: 179.0 }, SHEL: { start: 44.0, end: 57.0 }, TTE: { start: 49.0, end: 63.0 } },
        2023: { 'BTC-USD': { start: 16530, end: 42260 }, XOM: { start: 110.0, end: 100.0 }, CVX: { start: 179.0, end: 149.0 }, SHEL: { start: 57.0, end: 65.0 }, TTE: { start: 63.0, end: 67.0 } },
        2024: { 'BTC-USD': { start: 42260, end: 98000 }, XOM: { start: 100.0, end: 118.0 }, CVX: { start: 149.0, end: 155.0 }, SHEL: { start: 65.0, end: 70.0 }, TTE: { start: 67.0, end: 72.0 } }
    }
  }
};

export type SectorKey = keyof typeof SECTOR_CONFIG;



