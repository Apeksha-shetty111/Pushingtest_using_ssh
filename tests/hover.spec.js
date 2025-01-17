const{test,expect}=require("@playwright/test")

test("hover",async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.getByPlaceholder("Enter Email").type("admin@email.com")
    await page.getByPlaceholder("Enter Password").fill("admin@123")
    await page.click('button[type="submit"]')

    await expect(page).toHaveURL(/freelance/)
    await page.locator('span', { hasText: 'Manage'}).hover();
    await page.getByText("Manage Courses").click({delay:3000})


})

