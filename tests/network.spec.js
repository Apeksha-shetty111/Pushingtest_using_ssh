const{test,expect}=require("@playwright/test")
await page.getByText("New user? Signup").click()

test.only("working with load",async function ({page}) {

await page.goto("https://freelance-learn-automation.vercel.app/login")
await page.waitForLoadState("networkidle")
const count=await page.locator('.interests-div input[type="checkbox"]').count()
expect(count).toBe(8)


})