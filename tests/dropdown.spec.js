const{test,expect}=require("@playwright/test")

test("droppdown",async function({page}) {
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await page.locator("#state").selectOption({label:"Goa"})
    
    await page.waitForTimeout(5000)

    //verify if the place is in proper index as such
    

    
let allelements=await state.$$("option")
let value
let statusofstate=false

for(let i=0;i<allelements.length;i++)
{
    let element=allelements[i]
    value=await element.textContent()
    if(value.includes("Rajasthan"))
    {
        statusofstate=true
        break
    }

}
console.log(value)
await expect(statusofstate).toBeTruthy()
await page.locator("#hobbies").selectOption(['Playing','Swimming'])
}
)