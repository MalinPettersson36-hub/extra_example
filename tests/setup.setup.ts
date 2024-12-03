import { request, test as setup } from '@playwright/test'
import { LoginPage } from '../pages/loginpage';

const authFile = 'auth/cookiesState.json'

setup('Clean up db', async ({page}) => {
    const apiContext = await request.newContext({
        baseURL: 'https://test-379574553568.us-central1.run.app',
        extraHTTPHeaders: {
          'api_key': 'dsadsadsadsadsa',
          'content-type': 'application/json',
        },
      });
      await apiContext.delete('/student_delete_all')

      await page.goto('https://hoff.is/cookies')

    await new LoginPage(page).login("Markus", "sup3rs3cr3t", 'business')

    await page.context().storageState({path: authFile})
})
