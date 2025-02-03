import { test, expect } from '@playwright/test'

// test("Get response for valid parameters", async function ({ request }) {
//     const response = await request.get("/objects", {
//         params: {
//             id:"10",
//             name: "Apple iPad Mini 5th Gen"
//         },
//     })
//     console.log(await response.json())
//     expect(response.ok()).toBeTruthy()
//     expect(response.status()).toBe(200)

// })
test("Not found response for invalid parameters", async function ({ request }) {
    const response = await request.get("/objects", {
        params: {
            id:"19",
            // name: "Apple iPad Mini 5th Gen"
        },
    })
    console.log(await response.json())
    expect(await response.json()).toHaveLength(0)
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200)

})

