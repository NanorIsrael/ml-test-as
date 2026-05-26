import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductPage } from '../../pages/ProductPage';

test('user can login and view products', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.loginFromHOmePage(
        process.env.TEST_EMAIL as string,
        process.env.TEST_PASSWORD as string
    );
});

test('user can view products once landed on the homepage', async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.ensureUserCanPurchaseVoucher(
        process.env.TEST_EMAIL as string,
        process.env.TEST_PASSWORD as string
    );
});
test('user recieves QR Code after successful purchase', async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.ensureUserRecievesQRCodeAfterSuccessPurchase(
        process.env.TEST_EMAIL as string,
        process.env.TEST_PASSWORD as string
    );
});