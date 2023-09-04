exports.cartPage= class CartPage{
    constructor(page){
        this.page = page
        this.checkoutButton =  page.locator('#checkout');
    }
    
    async clickCheckOutButton(){
        await this.checkoutButton.click();
    }

}