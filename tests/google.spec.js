const{test,expect} =require("@playwright/test")

test("verify google",async function({page}){
  await page.goto("https://www.google.com")
  let url=await page.url()
  console.log(url)
  //to print the title

  let title=await page.title()
  await expect(page).toHaveTitle("Google")
})