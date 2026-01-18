import { chromium } from 'playwright';

async function inspect() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  
  await page.goto('http://localhost:5173/');
  await page.waitForLoadState('networkidle');
  
  await page.screenshot({ path: 'screenshots/colors.png', fullPage: true });
  console.log('✓ Colors page screenshot saved');

  await page.click('text=Typography');
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'screenshots/typography.png', fullPage: true });
  console.log('✓ Typography page screenshot saved');

  await page.click('text=Spacing');
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'screenshots/spacing.png', fullPage: true });
  console.log('✓ Spacing page screenshot saved');

  await page.click('text=Components');
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'screenshots/components.png', fullPage: true });
  console.log('✓ Components page screenshot saved');

  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  });
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'screenshots/components-dark.png', fullPage: true });
  console.log('✓ Components dark mode screenshot saved');

  const title = await page.title();
  const h1 = await page.locator('h1').first().textContent();
  const navItems = await page.locator('nav button').allTextContents();
  
  console.log('\n--- Page Inspection ---');
  console.log('Title:', title);
  console.log('H1:', h1);
  console.log('Nav items:', navItems);

  const buttons = await page.locator('button').count();
  const inputs = await page.locator('input').count();
  const headings = await page.locator('h1, h2, h3, h4').count();
  
  console.log('\n--- Element Counts ---');
  console.log('Buttons:', buttons);
  console.log('Inputs:', inputs);
  console.log('Headings:', headings);

  await browser.close();
  console.log('\n✓ Inspection complete');
}

inspect().catch(console.error);
