import { Page, expect } from '@playwright/test';

export class ProductPage {

    constructor(private page: Page) { }

    // async goto() {
    //     await this.page.goto('/login');
    // }

    async loginFromHOmePage(email: string, password: string) {
        await this.page.goto('/');
        await this.page.getByRole('button', { name: 'sign in' }).click();
        await this.page.getByRole('textbox', { name: 'Enter email address' }).fill(email);
        await this.page.getByRole('textbox', { name: 'Enter password' }).fill(password);
        await this.page.getByRole('button', { name: 'Sign in', exact: true }).click();
        await expect(this.page.getByRole('banner')).toContainText('ISRAEL OGBODZOR');
        await expect(this.page.locator("body")).toContainText("Buy")
        await expect(this.page.locator('body')).toContainText('Units available');
    }

    async ensureUserCanPurchaseVoucher(email: string, password: string) {
        await this.page.goto('/');
        await this.page.getByRole('button', { name: 'sign in' }).click();
        await this.page.getByRole('textbox', { name: 'Enter email address' }).fill(email);
        await this.page.getByRole('textbox', { name: 'Enter password' }).fill(password);
        await this.page.getByRole('button', { name: 'Sign in', exact: true }).click();

        await expect(this.page.getByRole('link', { name: 'Buy Voucher' })).toContainText('Buy Voucher');
        await this.page.getByRole('link', { name: 'Buy Voucher' }).click();
        await this.page.waitForTimeout(5000);

        await this.page.locator('div').filter({ hasText: 'Mojo PaymentsIT Firm' }).nth(3).click();
        await this.page.waitForTimeout(5000);

        await this.page.getByRole('textbox', { name: 'Give your voucher a custom' }).fill('daily test');
        await this.page.getByPlaceholder('Enter an amount').fill('1');
        await this.page.getByPlaceholder('Quantity').fill('1');
        await this.page.getByRole('combobox').selectOption('81d5edfc-2e27-4136-9d3f-1807244945f2');
        await this.page.getByRole('combobox').nth(1).selectOption('f8eca619-e2c7-4bb4-8205-9f78b8a7cf5b');
        await this.page.getByRole('button', { name: 'Make Payment' }).click();
        await this.page.getByRole('button', { name: 'Confirm Payment' }).click();
        await this.page.getByRole('button', { name: 'View My Vouchers' }).click();
        await expect(this.page.getByRole('main')).toContainText('PAID');
    }

    async ensureUserRecievesQRCodeAfterSuccessPurchase(email: string, password: string) {
        await this.page.goto('/');
        await this.page.getByRole('button', { name: 'sign in' }).click();
        await this.page.getByRole('textbox', { name: 'Enter email address' }).fill(email);
        await this.page.getByRole('textbox', { name: 'Enter password' }).fill(password);
        await this.page.getByRole('button', { name: 'Sign in', exact: true }).click();
        await expect(this.page.getByRole('banner')).toContainText('ISRAEL OGBODZOR');

        await this.page.getByRole('button', { name: 'ISRAEL OGBODZOR' }).click();
        await this.page.getByRole('link', { name: 'My Vouchers' }).click();
        await this.page.locator('div:nth-child(7) > .relative > .flex.items-center').click();
        await expect(this.page.locator('h2')).toContainText('Bill Reference: BLQBZDHAA3');
        await expect(this.page.getByRole('main')).toContainText('Voucher Code');
    }
}