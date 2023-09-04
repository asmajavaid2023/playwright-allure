exports.checkoutOverviewPage= class CheckoutOverviewPage{
    constructor(page){
        this.page = page
        this.finishButton =  page.locator('#finish');
    }
    
    async clickFinishButton(){
        await this.finishButton.click();
    }

}