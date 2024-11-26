import {test, request, APIRequestContext, expect} from '@playwright/test';

let apiContext: APIRequestContext;

test.beforeAll('Setup api context', async () => {
    apiContext = await request.newContext({
        baseURL: 'https://test-379574553568.us-central1.run.app',
        extraHTTPHeaders: {
            'api_key': 'malin_test_key',
            'content-type': 'application/json'
        }
    })
} )

test('Create student using API', async () => {
    const student = {
        age: "99",
        name: "Nisse",
        grade: "MVG"
    }

    //Create new student using POST
    const response = await apiContext.post("/student", {data: student})
    const responsejson = await response.json()
    //console.log(responsejson)
    const studentId = responsejson.student_id;

    //Get newly created student by id
    const responseGet = await apiContext.get(`/student/${studentId}`)
    const responseGetJson = await responseGet.json();

    //Verify student that is created has the expected age
    expect(responseGetJson.age).toBe(student.age)
})

//Assignment: Create another API test.
test('Delete student using API', async () => {
    const student = {
        age: "98",
        name: "Pisse",
        grade: "MVG"
    }

    //Create new student using POST
    const response = await apiContext.post("/student", {data: student});
    const responseJson = await response.json();
    const studentId = responseJson.student_id;

    //Delete the newly created student
    const deleteResponse = await apiContext.delete(`/student/${studentId}`);
    expect(deleteResponse.status()).toBe(200);

    //Verify the student no longer exists using GET
    const getResponse = await apiContext.get(`/student/${studentId}`);
    const getResponseJson = await getResponse.json()
    //Obs! Failar eftersom den ger 200 tillbaka
    //expect(getResponse.status()).toBe(404);
    expect(getResponseJson.message).toContain("No student found with id:");
    expect(getResponseJson.message).toBe(`No student found with id: ${studentId}`);

})