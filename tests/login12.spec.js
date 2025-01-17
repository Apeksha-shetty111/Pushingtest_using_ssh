// const{test,expect}=require("@playwright/test")
// const  LoginPage=require("../pages/loginpage")
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginpage';
import HomePage from '../pages/homepage';

test ("login",async function ({page}) {
    page.goto("https://freelance-learn-automation.vercel.app/login")
    const loginpage=new LoginPage(page)
    await loginpage.loginAction("admin@gmail.com","admin123")
  
   
    const homepage=new HomePage(page)
    await homepage.checkForCart()
    await homepage.signoutFunction()
    await homepage.verifyAfterSigout()
})