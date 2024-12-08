import { expect, Page } from '@playwright/test'

export class FinalizePurchasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Metod för att vänta på att modala fönstret ska visas
  async waitForModal() {
    await this.page.waitForSelector('.modal-open', { state: 'visible' });
  }

  async closeModal() {
    await this.page.click('#confirmPurchaseButton');
  }

  async fillForm(data: { name: string; address: string }) {
    await this.page.fill('.modal-open #buyerName', data.name);
    await this.page.fill('.modal-open #buyerAddress', data.address);
  }

  async verifyReceiptGrandTotal(expectedTotal: string) {
    const total = await this.page.textContent('#receiptGrandTotal');
    await expect(total, `Expected receipt grand total to be ${expectedTotal}, but got ${total}`).toBe(expectedTotal);
  }
}

  