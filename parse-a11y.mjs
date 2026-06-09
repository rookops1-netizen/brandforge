import { readFileSync } from 'fs';

const data = JSON.parse(readFileSync('./lighthouse-home.json', 'utf8'));
const audits = data.audits;

console.log('=== FAILED ACCESSIBILITY AUDITS ===');
for (const [id, audit] of Object.entries(audits)) {
  if (audit.score !== null && audit.score < 1 && audit.score !== undefined) {
    console.log(`\n[${id}] ${audit.title} (score: ${audit.score})`);
    console.log(`  Description: ${audit.description}`);
    if (audit.details?.items) {
      audit.details.items.forEach(item => {
        const node = item.node?.snippet || item.snippet || '';
        const selector = item.node?.selector || item.selector || '';
        const impact = item.impact || item.node?.impact || '';
        console.log(`  - ${selector} ${impact}`);
        if (node) console.log(`    ${node.substring(0, 120)}`);
      });
    }
  }
}