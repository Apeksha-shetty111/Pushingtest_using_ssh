const{test,expect}=require("@playwright/test")

test("auto2",async function ({browser}) {
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    
    

 const[newpage]=await Promise.all
 (
    
    [
       context.waitForEvent("page"),
       page.locator("//div[@class='container-child']//a[4]//*[name()='svg']//*[name()='path' and contains(@d,'M353.701,0')]").click()
    ]
  )


await newpage.waitForTimeout(5000)
await newpage.locator("(//input[@name='email'])[2]").fill("apeksha@gmail.com")
await newpage.close()
await page.locator("#email1").fill("admin@gmail.com")

})
