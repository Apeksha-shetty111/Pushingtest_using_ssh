import {test,expect} from '@playwright/test'

test("delet request", async function ({request}) {
    const deleteRequest=await request.delete("/objects/ff808181932badb60194cb41a5f23e94")
    console.log(await deleteRequest.json())
    expect( deleteRequest.status()).toBe(200)
    expect(deleteRequest.ok()).toBeTruthy()
})