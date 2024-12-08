import { test, expect } from '@playwright/test';
import { StorePage } from '../pages/storepage';
import { FinalizePurchasePage } from '../pages/finalizepurchasepage';

test.describe('Store Page Tests', () => {
  let storePage: StorePage;
  let finalizePurchasePage: FinalizePurchasePage;

  test.beforeEach(async ({ page }) => {
    storePage = new StorePage(page);
    finalizePurchasePage = new FinalizePurchasePage(page);
    await storePage.navigateTo();
  });

  
  test('Add first product to cart,verify sum and buy the product', async () => {
    
    //Välj första produkten
    await storePage.chooseFirstProduct();

    //Lägg varan i shoppingbagen
    await storePage.addToCart();

    // Verifiera totalsumman för vald product
    await storePage.verifyTotalSum('12'); 

    //Köp produkten
    await storePage.buyProduct();

     // Vänta på att det modala fönstret ska visas
     await finalizePurchasePage.waitForModal();

     // Fyll i formuläret i det modala fönstret
    await finalizePurchasePage.fillForm({ name: 'Malin', address: 'Gatan 12' });

    // Bekräfta köpet
    await finalizePurchasePage.closeModal()

    // Vänta på att det modala fönstret ska visas
    await finalizePurchasePage.waitForModal();

    //Bekräfta summan i det modala fönstret
    await finalizePurchasePage.verifyReceiptGrandTotal('$12')

    //Stäng det modala fönstret
    await finalizePurchasePage.closeModal()

    //Verifiera att pengar har dragits
    await storePage.verifySaldo('9988')
  });

});