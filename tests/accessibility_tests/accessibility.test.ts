//import { StorePage } from '../../pages/storepage'
import {expect, test} from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';

test('Accessibility scan for login page', async ({ page }, testInfo) => {
    await page.goto('https://hoff.is/login/');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    await testInfo.attach('accessibility-scan-results', {
        body: JSON.stringify(accessibilityScanResults, null, 2),
        contentType: 'application/json'
    });

    expect(accessibilityScanResults.violations).toEqual([]);
})