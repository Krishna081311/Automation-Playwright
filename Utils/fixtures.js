const base = require('@playwright/test');


    exports.customtest = base.test.extend(
    
    {
    authenticatedPage : async ({browser}, use) => {

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://www.shoppersstack.com/");
        await page.waitForLoadState('networkidle');
        await page.locator('button#loginBtn').click();

        await page.locator('input#Email').fill("krishna0813@gmail.com");
        await page.locator('input#Password').fill("Krishna@123");
        await page.locator('span.MuiButton-label').first().click();
        await page.waitForLoadState('networkidle');
        await use(page);

        await context.close();

    }
    }
)