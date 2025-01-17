const {test,expect} =require('@playwright/test')

test("my first test",async function({page}){
   
    expect(12).toBe(12)
})

test.skip("my SECOND test",async function({page}){
   

    expect(100).toBe(100)

})

test("my third test",async function({page}){
    
    expect(120).toBe(120)
})
test("my four test",async function({page}){
    
    expect("apeksha shetty").toContain("apeksha")
})
test("my fifth test",async function({page}){
    expect("apeksha shetty".includes("apeksha")).toBeTruthy()

})