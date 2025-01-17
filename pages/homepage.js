import { expect } from "@playwright/test"
class HomePage{

    constructor(page)
    {
        this.page=page
        this.icon="//img[@alt='menu']"
        this.cart="//button[@class='cartBtn']"
        this.signout="//button[@class='nav-menu-item']"
    }

    async checkForCart()
    {
        await expect(this.page.locator(this.cart)).toBeVisible()
    }  

    async signoutFunction () {
        await this.page.click(this.icon)
        await this.page.click(this.signout)


        
    }
    async verifyAfterSigout()
    {
        await expect(this.page).toHaveURL(/login/)
    }
}
module.exports=HomePage