import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('user login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        'israelnanor88@gmail.com',
        'Bredre@360byte'
    );
});