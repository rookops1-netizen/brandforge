import { readFileSync } from 'fs';

const files = [
  ['Homepage', './lighthouse-home.json'],
  ['Startup', './lighthouse-startup.json'],
  ['Fitness', './lighthouse-fitness.json'],
  ['Restaurant', './lighthouse-restaurant.json'],
];

for (const [name, path] of files) {
  try {
    const data = JSON.parse(readFileSync(path, 'utf8'));
    const cats = data.categories;
    const audits = data.audits;
    const perf = Math.round(cats.performance.score * 100);
    const seo = Math.round(cats.seo.score * 100);
    const a11y = Math.round(cats.accessibility.score * 100);
    const fcp = audits['first-contentful-paint']?.displayValue || 'N/A';
    const lcp = audits['largest-contentful-paint']?.displayValue || 'N/A';
    const tbt = audits['total-blocking-time']?.displayValue || 'N/A';
    const cls = audits['cumulative-layout-shift']?.displayValue || 'N/A';
    console.log(`${name}: Perf=${perf} SEO=${seo} A11y=${a11y} | FCP=${fcp} LCP=${lcp} TBT=${tbt} CLS=${cls}`);
  } catch (e) {
    console.log(`${name}: file not found`);
  }
}