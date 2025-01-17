const{test,expect}=require("@playwright/test")
const { connect } = require("http2")

test("verify",async function({page})
{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.getByPlaceholder("username").type("Admin")
await page.getByPlaceholder("Password").type("admin")
await page.click('button[type="submit"]');

let errormsg= await page.locator("p.oxd-alert-content-text").textContent()
console.log(errormsg)

await expect(errormsg).toBe("Invalid credentials")

})