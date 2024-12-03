/*import { request } from "@playwright/test"
import { expect,test } from '../Fixturefil'
import { faker } from '@faker-js/faker'
import { getPersonnummer } from "../../utils/personnummer"

test('Test random data', async ({apiContext}) => {
    const student = {
        age: faker.number.float(),
        name: faker.name.fullName(),
        //grade: faker.company.catchPhrase()
        grade: await getPersonnummer
    }

    console.log(student)
    const response = await apiContext.post('/student', {data: student});
    expect(response).toBeTruthy();
})

//const { test, expect, request } = require('@playwright/test');
 
test('Fetch personnummer from Skatteverket API', async ({}) => {
  // Create a new API request context
  const apiContext = await request.newContext();
 
  // Define the API endpoint
  const apiUrl = 'https://skatteverket.entryscape.net/rowstore/dataset/b4de7df7-63c0-4e7e-bb59-1f156a591763';
 
  // Send a GET request to the API
  const response = await apiContext.get(apiUrl);
 
  // Check if the response status is OK
  expect(response.ok()).toBeTruthy();
 
  // Parse the JSON response
  const data = await response.json();
 
  // Extract the first personnummer from the dataset
  const personnummer = data.results[0].testpersonnummer;
 
  // Log the personnummer
  console.log('Fetched personnummer:', personnummer);
 
  // Use the personnummer in your test as needed
  // For example, you can fill a form field with this personnummer
  // await page.fill('#personnummer-input', personnummer);
});


*/
