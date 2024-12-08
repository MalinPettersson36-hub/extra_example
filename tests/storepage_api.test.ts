import { test, expect } from '@playwright/test';

test.describe('API Tests', () => {
  const baseUrl = 'https://hoff.is/store2/api/v1';

  test('Get product details', async ({ request }) => {
    for (let productId = 1; productId <= 10; productId++) {
      const response = await request.get(`${baseUrl}/price/${productId}`);
      expect(response.ok()).toBeTruthy();
      const product = await response.json();
      expect(product).toHaveProperty('id', productId);
    }
  });

  test('Get all products', async ({ request }) => {
    const response = await request.get(`${baseUrl}/product/list`);
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    
    expect(Array.isArray(data.products)).toBeTruthy();
    expect(data.products.length).toBeGreaterThan(0);
  });
});


