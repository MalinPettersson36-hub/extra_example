import test, { expect } from "@playwright/test"
import { LoginPage } from "../pages/loginpage"
import { StorePage } from "../pages/storepage"

let password: string
test('Login with Markus and verify Storepage can be reached', async ({page}) => {
    const loginPage = new LoginPage(page)
    const storePage = new StorePage(page)
    /*if (process.env.PASSWORD !== undefined){
        password = process.env.PASSWORD
    }*/
    

    await page.goto("http://hoff.is/login")
    loginPage.login("Markus","sup3rs3cr3t", 'consumer')
    //const username = await storePage.usernameText.textContent()
    const header = await storePage.header.textContent()

    //expect(username).toBe("markus")
    expect(header).toBe("Store")
})
