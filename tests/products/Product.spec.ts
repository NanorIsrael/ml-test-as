import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductPage } from '../../pages/ProductPage';

test('user can login and purchase a product', async ({ page }) => {

    const productPage = new ProductPage(page);

    await productPage.loginFromHOmePage(
        'israelnanor88@gmail.com',
        'Bredre@360byte'
    );
});