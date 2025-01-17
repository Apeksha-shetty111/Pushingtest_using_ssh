const{test,expect}=require("@playwright/test")
const { title } = require("process")
const { text } = require("stream/consumers")

test("frame",async function ({page}) {
    await page.goto("https:///docs.oracle.com/javase/8/docs/api/")
   const iframe= await page.frameLocator('frame[name="packageListFrame"]')
   await iframe.locator('text="java.applet"').click()
    await page.pause()
})    