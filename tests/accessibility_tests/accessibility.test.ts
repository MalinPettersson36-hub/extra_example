import {expect, test} from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';
//Failar, men det ska det göra
test('Accessibility scan for login page', async ({ page }, testInfo) => {
    await page.goto('https://hoff.is/login/');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    await testInfo.attach('accessibility-scan-results', {
        body: JSON.stringify(accessibilityScanResults, null, 2),
        contentType: 'application/json'
    });

    expect(accessibilityScanResults.violations, `Expected no accessibility violations, but found ${accessibilityScanResults.violations.length}. See attached results for details.`).toEqual([]);
})