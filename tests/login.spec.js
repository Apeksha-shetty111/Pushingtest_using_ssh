const{test,expect}=require("@playwright/test")

test.use({viewport:{width:1250,height:700}})

test("login test",async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // console.log(await page.viewportSize().width)
    // console.log(await page.viewportSize().height)
    await page.getByPlaceholder("username").type("Admin",{delay:200})
    // await page.getByPlaceholder("Password").type("passowrd")
    await page.getByPlaceholder("Password").type("Admin123",{delay:200})
    await page.click('button[type="submit"]');
    await page.waitForTimeout(5000)
    await  expect(page).toHaveURL(/dashboard/)


//logout

await page.locator(".oxd-userdropdown-img").click()
await page.getByText("Logout").click() 
await expect(page).toHaveURL(/login/)

})
