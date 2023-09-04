exports.loginPage= class LoginPage{
    constructor(page){
        this.page = page
        this.username =  page.locator('#user-name');
        this.password =  page.locator('#password');
        this.loginButton =  page.locator('#login-button');
    }

    async goToLoginPage(url){
        await this.page.goto(url);
    }

    async enterUserName(username){
        await this.username.fill(username);
    }

    async enterPasswrodName(password){
        await this.password.fill(password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }

    async loginToWebsite(username,password){
        await this.enterUserName(username);
        await this.enterPasswrodName(password);
        await this.clickLoginButton();
    }

}