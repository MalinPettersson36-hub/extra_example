import { test, expect } from '@playwright/test';
import { StorePage } from '../pages/storepage';

test.describe('Store Page Tests', () => {
  let storePage: StorePage;

  test.beforeEach(async ({ page }) => {
    storePage = new StorePage(page);
    await storePage.navigateTo();
  });
/*
  // Test 1: Verify page loads with correct query parameters
  test('Verify page loads with correct query parameters', async () => {
    await storePage.verifyUsernameVisible();
    await storePage.verifyRoleVisible();
  });
*/
  // Test 2: Verify specific store item is displayed and clickable
  test('Verify specific store item is displayed and clickable', async () => {
    //const productName = 'Product A'; // Replace with actual product name
    await storePage.clickProduct();
    await storePage.addToCart();

    // Verify totalSum for choosen product
    await storePage.verifyTotalSum('12'); // Example cart count
  });
/*
  // Test 3: Add an item to the cart and verify
  test('Add item to cart and verify', async () => {
    const productName = 'Product A'; // Replace with actual product name
    await storePage.addToCart(productName);
    await storePage.verifyCartItemVisible(productName);
    await storePage.verifyCartCount('1'); // Example cart count
  });
  */
});