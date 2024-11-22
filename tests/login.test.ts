import test, { expect } from "@playwright/test"
import { LoginPage } from "../pages/loginpage"
import { StorePage } from "../pages/storepage"

test('Login with Markus', async ({page}) => {
    const loginPage = new LoginPage(page)
    const storePage = new StorePage(page)


    await page.goto("http://hoff.is/login")
    loginPage.login("Markus","sup3rs3cr3t", 'consumer')
    //const username = await storePage.usernameText.textContent()
    const header = await storePage.header.textContent()

    //expect(username).toBe("markus")
    expect(header).toBe("Store")
})
/*
test.only('Login with Markus-nr 2 ska faila', async ({page}) => {
    const loginPage = new LoginPage(page)
    const storePage = new StorePage(page)


    await page.goto("http://hoff.is/login")
    loginPage.login("Markus","sup3rs3cr3t", 'consumer')
    //const username = await storePage.usernameText.textContent()
    const header = await storePage.header.textContent()

    //expect(username).toBe("markus")
    expect(header).toBe("Inte")
})

test.only('faila', async ({page}) => {
    const loginPage = new LoginPage(page)



    await page.goto("http://hoff.is/login")
    await loginPage.login("Markus","sup3rs3cr3t", 'business')
    //const username = await storePage.usernameText.textContent()
    const errorMessage = await loginPage.errorMessage.textContent()

    //expect(username).toBe("markus")
    expect(errorMessage).toBe("Incorrect password")
})*/