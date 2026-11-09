const { test, expect } = require('@playwright/test');


test('@regression print list of web elements', async ({page})=>{

const ProductName = page.locator('h4.product-name');
await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
console.log(await page.title());
// await page.waitForLoadState('networkidle'); 
await page.locator('h4.product-name').first().waitFor();
const AllProducts = await ProductName.allTextContents();
console.log(AllProducts);

}

);




// test('@Web Client App login', async ({ page }) => {
//    //js file- Login js, DashboardPage
//    const email = "anshika@gmail.com";
//    const productName = 'zara coat 3';
//    const products = page.locator(".card-body");
//    await page.goto("https://rahulshettyacademy.com/client");
//    await page.locator("#userEmail").fill(email);
//    await page.locator("#userPassword").fill("Iamking@000");
//    await page.locator("[value='Login']").click();
//    await page.waitForLoadState('networkidle');
//    await page.locator(".card-body b").first().waitFor();
//    const titles = await page.locator(".card-body b").allTextContents();
//    console.log(titles); 

// }
// );

