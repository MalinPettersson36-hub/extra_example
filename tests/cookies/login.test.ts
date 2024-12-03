/*import { test, expect } from '@playwright/test'
import { LoginPage } from '../../pages/loginpage'
import { StorePage } from '../../pages/storepage'

test('Test to login and buy', async ({page}) => {
    await page.goto('https://hoff.is/cookies/store')

    await new LoginPage(page).login("Markus", "sup3rs3cr3t", 'business')

    await page.waitForTimeout(200);

    await expect(new StorePage(page).usernameText).toHaveText("User: Markus")

    //await (new StorePage(page).getUsername()).toBe("Markus")
})
    */