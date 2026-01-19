import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test('loads and shows main content', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=UI Optimizer')).toBeVisible();
  });
});

test.describe('Story Index Page', () => {
  test('loads and shows design journey content', async ({ page }) => {
    await page.goto('/story');
    await expect(page.locator('h1')).toContainText('Design Journey');
    await expect(page.locator('text=Multi-Persona')).toBeVisible();
  });

  test('has navigation to individual stories', async ({ page }) => {
    await page.goto('/story');
    await expect(page.locator('a[href="/story/dashboard"]')).toBeVisible();
  });
});

test.describe('Dashboard Story Page', () => {
  test('loads with understand phase active', async ({ page }) => {
    await page.goto('/story/dashboard');
    await expect(page.locator('text=Research Agent')).toBeVisible();
    await expect(page.locator('text=Sarah Chen')).toBeVisible();
  });

  test('shows both personas (primary and secondary)', async ({ page }) => {
    await page.goto('/story/dashboard');
    await expect(page.locator('text=Sarah Chen')).toBeVisible();
    await expect(page.locator('text=James Park')).toBeVisible();
  });

  test('clicking persona card filters JTBDs', async ({ page }) => {
    await page.goto('/story/dashboard');
    const sarahCard = page.locator('text=Primary Persona').locator('..').locator('..');
    await sarahCard.click();
    await expect(page.locator('text=Showing jobs for:')).toBeVisible();
    await expect(page.locator('text=Show all')).toBeVisible();
  });

  test('logo links to home', async ({ page }) => {
    await page.goto('/story/dashboard');
    await page.locator('.cursor-pointer:has-text("Optimizer")').first().click();
    await expect(page).toHaveURL('/');
  });

  test('can navigate between phases', async ({ page }) => {
    await page.goto('/story/dashboard');
    await page.getByRole('button', { name: /02\s*Define/ }).click();
    await expect(page.locator('text=Strategy Agent')).toBeVisible();
    await expect(page.locator('text=Problem Statement')).toBeVisible();
    await expect(page.locator('text=Serving Multiple Personas')).toBeVisible();
  });

  test('define phase has resolving competing needs section', async ({ page }) => {
    await page.goto('/story/dashboard');
    await page.getByRole('button', { name: /02\s*Define/ }).click();
    await expect(page.locator('text=Resolving Competing Needs')).toBeVisible();
    await expect(page.locator('text=Identified Conflicts')).toBeVisible();
    await expect(page.locator('text=Anti-Patterns Avoided')).toBeVisible();
    await expect(page.locator('text=Progressive Disclosure')).toBeVisible();
  });

  test('has theme toggle', async ({ page }) => {
    await page.goto('/story/dashboard');
    const themeToggle = page.locator('button').filter({ has: page.locator('svg') }).first();
    await expect(themeToggle).toBeVisible();
  });
});

test.describe('Settings Story Page', () => {
  test('loads with personas', async ({ page }) => {
    await page.goto('/story/settings');
    await expect(page.locator('text=Marcus Rivera')).toBeVisible();
  });

  test('shows both personas with interactive filtering', async ({ page }) => {
    await page.goto('/story/settings');
    await expect(page.locator('text=Marcus Rivera')).toBeVisible();
    await expect(page.locator('text=Elena Kowalski')).toBeVisible();
    await expect(page.locator('text=Try it:')).toBeVisible();
  });

  test('define phase has multi-persona section', async ({ page }) => {
    await page.goto('/story/settings');
    await page.getByRole('button', { name: /02\s*Define/ }).click();
    await expect(page.locator('text=Serving Multiple Personas')).toBeVisible();
    await expect(page.locator('text=For Marcus')).toBeVisible();
    await expect(page.locator('text=For Elena')).toBeVisible();
  });

  test('define phase has resolving competing needs section', async ({ page }) => {
    await page.goto('/story/settings');
    await page.getByRole('button', { name: /02\s*Define/ }).click();
    await expect(page.locator('text=Resolving Competing Needs')).toBeVisible();
    await expect(page.locator('text=Layered Complexity')).toBeVisible();
  });
});

test.describe('Ecommerce Story Page', () => {
  test('loads with personas', async ({ page }) => {
    await page.goto('/story/ecommerce');
    await expect(page.locator('text=Jessica Park')).toBeVisible();
  });

  test('shows both personas with interactive filtering', async ({ page }) => {
    await page.goto('/story/ecommerce');
    await expect(page.locator('text=Jessica Park')).toBeVisible();
    await expect(page.locator('text=Tom Harrison')).toBeVisible();
  });

  test('define phase has multi-persona section', async ({ page }) => {
    await page.goto('/story/ecommerce');
    await page.getByRole('button', { name: /02\s*Define/ }).click();
    await expect(page.locator('text=Serving Multiple Personas')).toBeVisible();
    await expect(page.locator('text=For Jessica')).toBeVisible();
    await expect(page.locator('text=For Tom')).toBeVisible();
  });

  test('define phase has resolving competing needs section', async ({ page }) => {
    await page.goto('/story/ecommerce');
    await page.getByRole('button', { name: /02\s*Define/ }).click();
    await expect(page.locator('text=Resolving Competing Needs')).toBeVisible();
    await expect(page.locator('text=Parallel Paths')).toBeVisible();
  });
});

test.describe('DataTable Story Page', () => {
  test('loads with personas', async ({ page }) => {
    await page.goto('/story/datatable');
    await expect(page.locator('text=Alex Nguyen')).toBeVisible();
  });

  test('shows both personas with interactive filtering', async ({ page }) => {
    await page.goto('/story/datatable');
    await expect(page.locator('text=Alex Nguyen')).toBeVisible();
    await expect(page.locator('text=David Kim')).toBeVisible();
  });

  test('define phase has multi-persona section', async ({ page }) => {
    await page.goto('/story/datatable');
    await page.getByRole('button', { name: /02\s*Define/ }).click();
    await expect(page.locator('text=Serving Multiple Personas')).toBeVisible();
    await expect(page.locator('text=For Alex')).toBeVisible();
    await expect(page.locator('text=For David')).toBeVisible();
  });

  test('define phase has resolving competing needs section', async ({ page }) => {
    await page.goto('/story/datatable');
    await page.getByRole('button', { name: /02\s*Define/ }).click();
    await expect(page.locator('text=Resolving Competing Needs')).toBeVisible();
    await expect(page.locator('text=Context-Aware Revelation')).toBeVisible();
  });
});

test.describe('Example Pages', () => {
  test('dashboard example loads and has View Story button', async ({ page }) => {
    await page.goto('/examples/dashboard');
    await expect(page.locator('text=View Story')).toBeVisible();
  });

  test('dashboard example logo links home', async ({ page }) => {
    await page.goto('/examples/dashboard');
    await page.locator('.cursor-pointer:has-text("Optimizer")').first().click();
    await expect(page).toHaveURL('/');
  });

  test('settings example loads', async ({ page }) => {
    await page.goto('/examples/settings');
    await expect(page.locator('text=View Story')).toBeVisible();
  });

  test('ecommerce example loads', async ({ page }) => {
    await page.goto('/examples/ecommerce');
    await expect(page.locator('text=View Story')).toBeVisible();
  });

  test('datatable example loads', async ({ page }) => {
    await page.goto('/examples/datatable');
    await expect(page.locator('text=View Story')).toBeVisible();
  });
});

test.describe('Examples Gallery', () => {
  test('loads and shows all examples', async ({ page }) => {
    await page.goto('/examples');
    await expect(page.locator('text=Dashboard')).toBeVisible();
    await expect(page.locator('text=Settings')).toBeVisible();
    await expect(page.locator('text=E-commerce')).toBeVisible();
    await expect(page.locator('text=Data Table')).toBeVisible();
  });
});

test.describe('Sandbox Page', () => {
  test('loads component playground', async ({ page }) => {
    await page.goto('/sandbox');
    await expect(page.locator('text=Sandbox')).toBeVisible();
  });
});

test.describe('Theme Toggle', () => {
  test('toggles between light and dark mode', async ({ page }) => {
    await page.goto('/');
    
    const html = page.locator('html');
    const initialTheme = await html.getAttribute('data-theme');
    
    const themeToggle = page.locator('button').filter({ has: page.locator('svg') }).first();
    await themeToggle.click();
    
    const newTheme = await html.getAttribute('data-theme');
    expect(newTheme).not.toBe(initialTheme);
  });
});
});

test.describe('Story Index Page', () => {
  test('loads and shows design journey content', async ({ page }) => {
    await page.goto('/story');
    await expect(page.locator('h1')).toContainText('Design Journey');
    await expect(page.locator('text=Multi-Persona')).toBeVisible();
  });

  test('has navigation to individual stories', async ({ page }) => {
    await page.goto('/story');
    await expect(page.locator('a[href="/story/dashboard"]')).toBeVisible();
  });
});

test.describe('Dashboard Story Page', () => {
  test('loads with understand phase active', async ({ page }) => {
    await page.goto('/story/dashboard');
    await expect(page.locator('text=Research Agent')).toBeVisible();
    await expect(page.locator('text=Sarah Chen')).toBeVisible();
  });

  test('logo links to home', async ({ page }) => {
    await page.goto('/story/dashboard');
    await page.locator('.cursor-pointer:has-text("Optimizer")').first().click();
    await expect(page).toHaveURL('/');
  });

  test('can navigate between phases', async ({ page }) => {
    await page.goto('/story/dashboard');
    await page.getByRole('button', { name: /02\s*Define/ }).click();
    await expect(page.locator('text=Strategy Agent')).toBeVisible();
    await expect(page.locator('text=Problem Statement')).toBeVisible();
    await expect(page.locator('text=Serving Multiple Personas')).toBeVisible();
  });

  test('has theme toggle', async ({ page }) => {
    await page.goto('/story/dashboard');
    const themeToggle = page.locator('button').filter({ has: page.locator('svg') }).first();
    await expect(themeToggle).toBeVisible();
  });
});

test.describe('Settings Story Page', () => {
  test('loads with personas', async ({ page }) => {
    await page.goto('/story/settings');
    await expect(page.locator('text=Marcus Rivera')).toBeVisible();
  });

  test('define phase has multi-persona section', async ({ page }) => {
    await page.goto('/story/settings');
    await page.getByRole('button', { name: /02\s*Define/ }).click();
    await expect(page.locator('text=Serving Multiple Personas')).toBeVisible();
    await expect(page.locator('text=For Marcus')).toBeVisible();
    await expect(page.locator('text=For Elena')).toBeVisible();
  });
});

test.describe('Ecommerce Story Page', () => {
  test('loads with personas', async ({ page }) => {
    await page.goto('/story/ecommerce');
    await expect(page.locator('text=Jessica Park')).toBeVisible();
  });

  test('define phase has multi-persona section', async ({ page }) => {
    await page.goto('/story/ecommerce');
    await page.getByRole('button', { name: /02\s*Define/ }).click();
    await expect(page.locator('text=Serving Multiple Personas')).toBeVisible();
    await expect(page.locator('text=For Jessica')).toBeVisible();
    await expect(page.locator('text=For Tom')).toBeVisible();
  });
});

test.describe('DataTable Story Page', () => {
  test('loads with personas', async ({ page }) => {
    await page.goto('/story/datatable');
    await expect(page.locator('text=Alex Nguyen')).toBeVisible();
  });

  test('define phase has multi-persona section', async ({ page }) => {
    await page.goto('/story/datatable');
    await page.getByRole('button', { name: /02\s*Define/ }).click();
    await expect(page.locator('text=Serving Multiple Personas')).toBeVisible();
    await expect(page.locator('text=For Alex')).toBeVisible();
    await expect(page.locator('text=For David')).toBeVisible();
  });
});

test.describe('Example Pages', () => {
  test('dashboard example loads and has View Story button', async ({ page }) => {
    await page.goto('/examples/dashboard');
    await expect(page.locator('text=View Story')).toBeVisible();
  });

  test('dashboard example logo links home', async ({ page }) => {
    await page.goto('/examples/dashboard');
    await page.locator('.cursor-pointer:has-text("Optimizer")').first().click();
    await expect(page).toHaveURL('/');
  });

  test('settings example loads', async ({ page }) => {
    await page.goto('/examples/settings');
    await expect(page.locator('text=View Story')).toBeVisible();
  });

  test('ecommerce example loads', async ({ page }) => {
    await page.goto('/examples/ecommerce');
    await expect(page.locator('text=View Story')).toBeVisible();
  });

  test('datatable example loads', async ({ page }) => {
    await page.goto('/examples/datatable');
    await expect(page.locator('text=View Story')).toBeVisible();
  });
});

test.describe('Examples Gallery', () => {
  test('loads and shows all examples', async ({ page }) => {
    await page.goto('/examples');
    await expect(page.locator('text=Dashboard')).toBeVisible();
    await expect(page.locator('text=Settings')).toBeVisible();
    await expect(page.locator('text=E-commerce')).toBeVisible();
    await expect(page.locator('text=Data Table')).toBeVisible();
  });
});

test.describe('Sandbox Page', () => {
  test('loads component playground', async ({ page }) => {
    await page.goto('/sandbox');
    await expect(page.locator('text=Sandbox')).toBeVisible();
  });
});

test.describe('Theme Toggle', () => {
  test('toggles between light and dark mode', async ({ page }) => {
    await page.goto('/');
    
    // Get initial theme state
    const html = page.locator('html');
    const initialTheme = await html.getAttribute('data-theme');
    
    // Find and click theme toggle
    const themeToggle = page.locator('button').filter({ has: page.locator('svg') }).first();
    await themeToggle.click();
    
    // Check theme changed
    const newTheme = await html.getAttribute('data-theme');
    expect(newTheme).not.toBe(initialTheme);
  });
});
