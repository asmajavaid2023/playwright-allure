exports.infoPage= class InfoPage{
    constructor(page){
        this.page = page
        this.firstname =  page.locator('#first-name');
        this.lastname =  page.locator('#last-name');
        this.postalCode =  page.locator('#postal-code');
        this.continueButton =  page.locator('#continue');
    }
    
    async enterFirstName(firstname){
        await this.firstname.fill(firstname);
    }
    async enterLastName(lastname){
        await this.lastname.fill(lastname);
    }
    async enterPostalCode(postalCode){
        await this.postalCode.fill(postalCode);
    }
    async clickContinueButton(){
        await this.continueButton.click();
    }

    async enterPersonalInfo(firstname,lastname,postalCode){
        await this.enterFirstName(firstname);
        await this.enterLastName(lastname);
        await this.enterPostalCode(postalCode);
        await this.clickContinueButton();
    }

}