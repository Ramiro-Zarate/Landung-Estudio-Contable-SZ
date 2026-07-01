import lighthouse from 'lighthouse';
import { writeFile, mkdir } from 'fs/promises';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const URL = process.env.LH_URL || 'https://www.estudiocontablesz.com/';
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUT_DIR = resolve(__dirname, '../lighthouse');

const PRESETS = [
  {
    name: 'mobile',
    config: {
      extends: 'lighthouse:default',
      settings: {
        formFactor: 'mobile',
        screenEmulation: {
          mobile: true,
          width: 412,
          height: 823,
          deviceScaleFactor: 1.75,
          disabled: false,
        },
        throttling: {
          rttMs: 150,
          throughputKbps: 1638.4,
          cpuSlowdownMultiplier: 4,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0,
        },
        emulatedUserAgent:
          'Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36 Chrome-Lighthouse',
      },
    },
  },
  {
    name: 'desktop',
    config: {
      extends: 'lighthouse:default',
      settings: {
        formFactor: 'desktop',
        screenEmulation: {
          mobile: false,
          width: 1350,
          height: 940,
          deviceScaleFactor: 1,
          disabled: false,
        },
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0,
        },
      },
    },
  },
];

await mkdir(OUT_DIR, { recursive: true });

const summary = [];

for (const preset of PRESETS) {
  console.log(`\n>> Running Lighthouse (${preset.name}) against ${URL}`);
  const result = await lighthouse(URL, {
    output: ['json', 'html'],
    logLevel: 'error',
    chromePath: CHROME_PATH,
    chromeFlags: [
      '--headless=new',
      '--no-sandbox',
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--no-first-run',
      '--no-default-browser-check',
    ],
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  }, preset.config);

  if (!result) {
    console.error(`No result for ${preset.name}`);
    continue;
  }

  const jsonPath = resolve(OUT_DIR, `${preset.name}.json`);
  const htmlPath = resolve(OUT_DIR, `${preset.name}.html`);
  const reports = Array.isArray(result.report) ? result.report : [result.report];
  await writeFile(jsonPath, reports[0]);
  await writeFile(htmlPath, reports[1]);

  const lhr = result.lhr;
  const cats = lhr.categories;
  const audits = lhr.audits;
  const row = {
    preset: preset.name,
    scores: {
      performance: Math.round(cats.performance.score * 100),
      accessibility: Math.round(cats.accessibility.score * 100),
      'best-practices': Math.round(cats['best-practices'].score * 100),
      seo: Math.round(cats.seo.score * 100),
    },
    metrics: {
      FCP: audits['first-contentful-paint'].displayValue,
      LCP: audits['largest-contentful-paint'].displayValue,
      TBT: audits['total-blocking-time'].displayValue,
      CLS: audits['cumulative-layout-shift'].displayValue,
      SI: audits['speed-index'].displayValue,
      TTI: audits['interactive']?.displayValue || 'n/a',
    },
    topOpportunities: Object.values(audits)
      .filter((a) => a.details?.type === 'opportunity' && a.numericValue > 0)
      .sort((a, b) => (b.numericValue || 0) - (a.numericValue || 0))
      .slice(0, 8)
      .map((a) => ({ id: a.id, title: a.title, savings: a.details.overallSavingsMs ? `${Math.round(a.details.overallSavingsMs)}ms` : `${a.displayValue || ''}` })),
  };
  summary.push(row);
  console.log(JSON.stringify(row, null, 2));
}

await writeFile(resolve(OUT_DIR, 'summary.json'), JSON.stringify(summary, null, 2));
console.log(`\nSaved to ${OUT_DIR}`);
