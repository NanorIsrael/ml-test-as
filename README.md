
## Setup
npm init playwright@latest

dir structure/
│
├── tests/
│   ├── auth/
│   ├── checkout/
│   ├── products/
│   └── cart/
│
├── pages/
│   ├── LoginPage.ts
│   ├── ProductPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── fixtures/
├── test-data/
├── utils/
├── playwright.config.ts
└── package.json
flows:
login
search
product filtering
cart
checkout
payments
order confirmation

<!-- used to avoid flaky test -->
await expect(button).toBeVisible();
await page.waitForTimeout(5000);


