import { Page } from '@playwright/test';

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
}