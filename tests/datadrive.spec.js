const{test,expect}=require("@playwright/test")
const testdata=JSON.parse(JSON.stringify(require("../jason/testdata1.json")))

test.describe("data driven test",function(){
    for (let i = 0; i<testdata.length; i++)
    {
        const data=testdata[i]
        test.describe(`login ${data.id}`,function(){
            test("working with jason",async function ({page}) {
 
                await page.goto("https://freelance-learn-automation.vercel.app/login")
                await page.getByPlaceholder("Enter Password").fill(data.username)
                await page.locator("//input[@id='password1']").fill(data.password)
                })

        })

    }
})