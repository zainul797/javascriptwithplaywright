import 'dotenv/config'

export class loginPage {
    constructor(page)
    {
        this.page=page;
        this.username=page.locator("#user-name");
        this.password=page.locator("#password");
        this.loginButton=page.locator("#login-button");
    }
    //region 2
    async gotologinpageURl(){
        await this.page.goto(process.env.baseURl);
    }
    async enterUsername(){
        await this.username.fill(process.env.user_name);
    }
    async enterPassword(){
        await this.password.fill(process.env.password)
    }
    async clickloginButton(){
        await this.loginButton.click();
    }
    async validlogin(){
        await this.enterUsername();
        await this.enterPassword();
        await this.clickloginButton();
    }
}