exports.inventoryPage= class InventoryPage{
    constructor(page){
        this.page = page
        this.add_to_cart =  page.locator('#add-to-cart-sauce-labs-backpack');
        this.checkoutButton =  page.locator('#shopping_cart_container');
    }

    async addToCart(){
        await this.add_to_cart.click();
    }

    async clickCartButton(){
        await this.checkoutButton.click();
    }

    async addProductAndCartButton(){
        await this.addToCart();
        await this.clickCartButton();
    }

}