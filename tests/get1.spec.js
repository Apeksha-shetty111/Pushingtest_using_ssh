import {test,expect} from '@playwright/test'

test("get request",async function ({request}) {
    const response=await request.get("/objects");
    console.log(await response.json())
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200)

})

test("get1 request",async function ({request}) {
    const response=await request.get("/objects/16");
    console.log(await response.json())
    expect(response.ok()).toBeFalsy()
    expect(response.status()).toBe(404)

})