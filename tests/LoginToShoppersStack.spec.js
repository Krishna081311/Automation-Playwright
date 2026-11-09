// const {test}  = require("@playwright/test");
const { test, expect } = require('@playwright/test');

// test('playwright test with browser context', async ({browser})=>{
// const context= await browser.newContext();
// const page = await context.newPage();
// await page.goto("https://www.shoppersstack.com/");
// console.log(await page.title());
// await expect(page).toHaveTitle("ShoppersStack");
// }
// )

test('@smoke page playwright test' , async ({page})=>{

const WlcmLogin = page.locator('button#loginBtn');
const EmailLogin = page.locator('input#Email');
const PswdLogin = page.locator('input#Password');
const LoginLogin = page.locator('button#Login');


await page.goto("https://www.shoppersstack.com/");
console.log(await page.title());
console.log(await page.locator("text='Welcome to ShoppersStack. Enjoy shopping with us.'").textContent());

await expect(page).toHaveTitle("ShoppersStack");

await WlcmLogin.click();
await expect(page).toHaveTitle("ShoppersStack | Login");
console.log(await page.locator('button#vertical-tab-0').textContent());
await expect(page.locator('button#vertical-tab-0')).toContainText('Shopper Login');
await EmailLogin.fill("krishna0813@gmail.com");
await PswdLogin.fill("Krishna@123");
await LoginLogin.click();

await expect(page).toHaveURL("https://www.shoppersstack.com/");

await expect(page).toHaveTitle("ShoppersStack | Home");

console.log(await page.locator('li.MuiBreadcrumbs-li').textContent());

}

);


