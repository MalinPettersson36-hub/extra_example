import { Locator,expect, Page } from '@playwright/test';

export class StorePage {
  readonly page: Page;
  readonly usernameText: Locator;
  readonly header: Locator;
  readonly product: Locator;
  readonly addToCartButton: Locator;
  readonly totalSum: Locator;
  readonly buyButton: Locator;
  readonly saldo: Locator;


  constructor(page: Page) {
    this.page = page;
    this.usernameText=page.getByTestId("username");
    this.header=page.locator('h1');
    this.product=page.getByTestId("select-product");
    this.addToCartButton=page.getByTestId("add-to-cart-button");
    this.totalSum=page.locator('#totalSum');
    this.buyButton=page.locator('#button-finalize-purchase');
    this.saldo=page.locator('#money');
  }

  // Actions
  async navigateTo() {
    await this.page.goto('https://hoff.is/store2/?username=malin&role=business');
  }

  async chooseFirstProduct() {
    await this.product.click()
    await this.product.press('ArrowDown')
    await this.product.press('Enter')
  }

 async addToCart() {
    await this.addToCartButton.click()
  }

  async verifyTotalSum(expectedSum: string) {
    await expect(this.totalSum, `Expected total sum to be ${expectedSum}, but it was different`).toHaveText(expectedSum);
  }

  async buyProduct() {
    await this.buyButton.click()
  }

  async verifySaldo(expectedSaldo: string) {
    await expect(this.saldo, `Expected total sum to be ${expectedSaldo}, but it was different`).toHaveText(expectedSaldo);
  }


}