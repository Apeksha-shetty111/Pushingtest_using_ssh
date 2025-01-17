const{test,expect}=require("@playwright/test")
const testdata=JSON.parse(JSON.stringify(require("../jason/testdata.json")))

test("working with jason",async function ({page}) {
 
await page.goto("https://freelance-learn-automation.vercel.app/login")
await page.getByPlaceholder("Enter Password").fill(testdata.address.area)
await page.locator("//input[@id='password1']").fill(testdata.password)
})