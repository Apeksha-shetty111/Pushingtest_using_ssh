const{test,expect}=require("@playwright/test")

test("auto2",async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on('dialog',async function (d) {
        expect (d.type()).toContain("alert")
        expect(d.message()).toContain("I am a JS Alert")
        await d.accept()
        
    })
     await page.locator('button:has-text("Click for JS Alert")').click()
     await page.waitForTimeout(2000)

})  