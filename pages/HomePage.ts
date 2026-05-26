import { Page, expect } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) { }

    async goto() {
        await this.page.goto('/login');
    }

    async login(email: string, password: string) {
        await this.page.fill('input[placeholder="Enter email address"]', email);
        await this.page.fill('input[placeholder="Enter password "]', password);
        await this.page.click('button:has-text("Continue")');
    }

    async loginFromHomePage(email: string, password: string) {
        await this.page.goto('/');
        await this.page.getByRole('button', { name: 'sign in' }).click();
        await this.page.getByRole('textbox', { name: 'Enter email address' }).fill(email);
        await this.page.getByRole('textbox', { name: 'Enter password' }).fill(password);
        await this.page.getByRole('button', { name: 'Sign in', exact: true }).click();
        await expect(this.page.getByRole('banner')).toContainText('ISRAEL OGBODZOR');
    }
}