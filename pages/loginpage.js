class LoginPage
{
    constructor(page){
        this.page=page
        this.username=page.locator('[placeholder="Enter Email" ]')
        this.password="#password1"
        this.loginbutton= page.locator('button[type="submit"]')
    }
    async loginAction(user,pass)
    {
     await this.username.fill(user)
     await this.page.fill(this.password,pass)
     await this.loginbutton.click()
    }


}
module.exports=LoginPage

