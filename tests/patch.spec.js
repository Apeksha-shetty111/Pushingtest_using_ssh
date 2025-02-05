import { test, expect } from '@playwright/test'

test("patch test case", async function ({ request }) {
   const updateRequest = await request.patch("/objects/ff808181932badb60194cb41a5f23e94",
      {
         data: {
            name: "one-plus"
         }
      }
   )
   console.log(await updateRequest.json())
   expect(updateRequest.ok()).toBeTruthy()
   expect(updateRequest.status()).toBe(200)

})