const{test,expect}=require("@playwright/test")

test("auto",async function ({page}) {
    await page.goto("https://www.google.com")
    await page.getByTitle("Search").fill("Mukesh Otwani")
    await page.waitForSelector("li[role='presentation']")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
    
})