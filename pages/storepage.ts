/*import { Locator, Page } from "@playwright/test";

export class StorePage {
    readonly page: Page;
    readonly usernameText: Locator;
    readonly header: Locator;
   

    constructor(page: Page){
        this.page=page;
        this.usernameText=page.getByTestId("username")
        this.header=page.locator('h1')
    }

}
    */
import { Locator,expect, Page } from '@playwright/test';

export class StorePage {
  readonly page: Page;
  readonly usernameText: Locator;
  readonly header: Locator;
  readonly product: Locator;
  readonly addToCartButton: Locator;
  readonly totalSum: Locator


  constructor(page: Page) {
    this.page = page;
    this.usernameText=page.getByTestId("username");
    this.header=page.locator('h1');
    this.product=page.getByTestId("select-product");
    this.addToCartButton=page.getByTestId("add-to-cart-button");
    this.totalSum=page.locator('#totalSum');
  }

  // Locators
  //usernameText = () => this.page.locator('text=malin'); // Replace 'malin' with dynamic query if needed
  //roleText = () => this.page.locator('text=Business'); // Replace 'Business' with dynamic query if needed
  //product = (productName: string) => this.page.locator(`text=${productName}`); // Dynamic product selector
  //addToCartButton = (productName: string) =>
    //this.page.locator(`text=${productName} >> text=Add to Cart`);
  //cartItem = (productName: string) =>
    //this.page.locator(`text=${productName} in Cart`); // Adjust selector
  //cartCount = () => this.page.locator('#cart-count'); // Adjust selector

  // Actions
  async navigateTo() {
    await this.page.goto('https://hoff.is/store2/?username=malin&role=business');
  }
/*
  async verifyUsernameVisible() {
    await this.usernameText().waitFor();
  }

  async verifyRoleVisible() {
    await this.roleText().waitFor();
  }
*/
  async clickProduct() {
    await this.product.click()
    await this.product.press('ArrowDown')
    await this.product.press('Enter')
  }

 async addToCart() {
    await this.addToCartButton.click()
  }

  async verifyTotalSum(expectedSum: string) {
    await expect(this.totalSum).toHaveText(expectedSum);
  }


/*
  async verifyCartItemVisible(productName: string) {
    await this.cartItem(productName).waitFor();
  }

  async verifyCartCount(expectedCount: string) {
    await expect(this.cartCount()).toHaveText(expectedCount);
  }
    */
}