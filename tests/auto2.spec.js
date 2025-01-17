const{test,expect}=require("@playwright/test")

test.only("auto2",async function ({page}) {
    await page.goto("https://www.google.com")
    await page.getByTitle("Search").fill("Mukesh Otwani")
    await page.waitForSelector("li[role='presentation']")
    const arr=await page.$$("li[role='presentation']")
     for(let i=0;i<arr.length;i++)
     {
        let text=await arr[i].textContent()
        if(text.includes("youtube"))
        {
            await arr[i].click()
            break
        }
  }
    
   

})