const{test,expect}=require("@playwright/test")

test("auto2",async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on('dialog',async function (d) {
        expect (d.type()).toContain("confirm")
        await d.dismiss()
        
    })

    await page.locator('button:has-text("Click for JS Confir")').click()
})