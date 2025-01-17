const{test,expect}=require("@playwright/test")

test("upload", async function({page}){
     await page.goto("https://the-internet.herokuapp.com/upload")
     await page.locator("#file-upload").setInputFiles("D:/simple.txt")
    await page.locator("#file-submit").click()
     let message=await page.getByText("File Uploaded!").textContent()
     await expect(message).toContain("File Uploaded!")
 
     

   
})
