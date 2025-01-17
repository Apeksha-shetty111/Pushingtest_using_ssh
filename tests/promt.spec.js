const{test,expect}=require("@playwright/test")

test("auto2",async function ({page}) {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on('dialog',async function (d) {
        expect (d.type()).toContain("prompt")
        await d.accept("hello this is apeksha")
        
    })

    await page.locator('button:has-text("Click for JS Prompt")').click()
await page.waitForTimeout(5000)
})