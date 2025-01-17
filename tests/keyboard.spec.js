const{test,expec}=require("@playwright/test")

test("keyboard",async function({page}) {
    await page.goto("https://google.com")

   // await page.getByTitle("Search").fill("mukesh Otwani")
       await page.getByTitle("Search").focus()
       await page.keyboard.type("Mukesh otwani!")
       await page.keyboard.press("ArrowLeft")
       await page.keyboard.down("Shift")

       for(let i=0;i<6;i++)
       {
        await page.keyboard.press("ArrowLeft")
       }
       await page.keyboard.up("Shift")
       await page.keyboard.press("Backspace")

    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
  
    await page.keyboard.press("Backspace")
    await page.keyboard.press("Control+V")

})