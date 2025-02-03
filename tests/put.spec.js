import { test, expect } from "@playwright/test"


test("update data to existing id", async function ({ request }) {
    const response = await request.post("/objects", {
        data: {
            name: "oppo a5S",
            data: {
                year: 2019,
                price: 1849.99,
                'CPU mode': "Intel Core i9",
                'Hard disk size': "1 TB"
            }
        }
    })
    // console.log(await response.json())
    // expect(response.status()).toBe(200)
    // expect(response.ok()).toBeTruthy()
    const id=(await response.json()).id

// })

// test("update data to existing id", async function ({ request }) {
    const putResponse = await request.put(`/objects/${id}`, {
        data: {
            name: "oppo",
            age:"21",
            model:"2020"
        }

    })
    console.log(await putResponse.json())
    expect(putResponse.status()).toBe(200)
    expect(putResponse.ok()).toBeTruthy()


})