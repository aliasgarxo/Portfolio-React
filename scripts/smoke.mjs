import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
const errors = [], warnings = [];
page.on('console', m => { if (m.type()==='error') errors.push(m.text()); if (m.type()==='warning') warnings.push(m.text()); });
page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));

for (const [name, url] of [['home','http://127.0.0.1:4173/'], ['resume','http://127.0.0.1:4173/resume']]) {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
  await page.waitForTimeout(2500);
  const h1 = await page.locator('h1').allTextContents();
  const canvas = await page.locator('canvas').count();
  const text = (await page.locator('body').innerText()).replace(/\s+/g,' ').trim();
  console.log(`\n[${name}]`);
  console.log(`  rendered text length: ${text.length}`);
  console.log(`  h1 count: ${h1.length} -> ${JSON.stringify(h1)}`);
  console.log(`  <canvas> (particles): ${canvas}`);
  console.log(`  first 140 chars: ${text.slice(0,140)}`);
  await page.screenshot({ path: `/tmp/shot-${name}.png`, fullPage: false });
}
console.log(`\nconsole errors: ${errors.length}`);
errors.slice(0,8).forEach(e => console.log('  ERR ' + e.slice(0,200)));
console.log(`console warnings: ${warnings.length}`);
warnings.slice(0,5).forEach(w => console.log('  WARN ' + w.slice(0,160)));
await browser.close();
