import {test} from '@playwright/test';

test('Get students from API', async () => {
    const response = await fetch('https://test-379574553568.us-central1.run.app/student',

    {
        headers: {'api_key': 'malin_test_key'}
    })
    const responsejson = await response.json()
    console.log(responsejson)
})

test('Add new student with API', async () => {
    const student = {
        age: '100',
        grade: 'A',
        name: 'Malin'
    };

    const responsepost = await fetch('https://test-379574553568.us-central1.run.app/student',

        {
            method: 'POST',
            body: JSON.stringify(student),
            headers: {
                'api_key': 'malin_test_key',
                'Content-type': 'application/json'
            }
        })

        const responsePostJson = await responsepost.json()

        const response = await fetch(`https://test-379574553568.us-central1.run.app/student/${responsePostJson.student_id}`,

            {
                headers: {'api_key': 'malin_test_key'}
            })

            const responsejson = await response.json()
            console.log(responsejson)
})

test('Update current student', async () => {
    const student = {
        age: '100',
        grade: 'A',
        name: 'Malin'
    };

    const responsepost = await fetch('https://test-379574553568.us-central1.run.app/student',

        {
            method: 'POST',
            body: JSON.stringify(student),
            headers: {
                'api_key': 'malin_test_key',
                'Content-type': 'application/json'
            }
        })

        const responsePostJson = await responsepost.json()
        const studentId = responsePostJson.student_id;

        student.name = "Mallan"
        const responsePut = await fetch(`https://test-379574553568.us-central1.run.app/student/${studentId}`,
        {
            method: 'PUT',
            body: JSON.stringify(student),
            headers: {
                'api_key': 'malin_test_key',
                'Content-type': 'application/json'
            }
        })

        const responsePutJson = await responsePut.json()
        console.log(responsePutJson)

})
