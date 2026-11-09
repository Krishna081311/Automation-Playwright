const { test, expect } = require('@playwright/test');
const {POManager} = require('../Pages/POManager');
const dataset = JSON.parse(JSON.stringify(require('../TestData/loginTestData.json')));

for(const data of dataset)
{
test(`End to End Ecommerce Script  ${data.ProductName} `, async ({page})=>{

    const poManager = new POManager(page);

const URL = "https://rahulshettyacademy.com/client";

const loginPage = poManager.getLoginPage();
const dashboardPage = poManager.getDashboardpage();

await loginPage.goTo(URL);
await loginPage.validLogin(data.username, data.Password);


const Products = page.locator('.card-body');

await page.locator('.card-body b').first().waitFor();
const ProductsList = await page.locator('.card-body b').allTextContents();

console.log(ProductsList);

const count = await Products.count();

console.log(count);


for (let i=0; i< count; ++i)
{
if ( await Products.nth(i).locator("b").textContent() === data.ProductName)
{

await Products.nth(i).locator("text=  Add To Cart").click();
const Product = await Products.nth(i).locator('b').textContent();
console.log(Product);
break;

}

}

await page.locator('[routerlink="/dashboard/cart"]').click();
await page.locator("div li").first().waitFor();


   await page.locator("text=Checkout").click();
 
  await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 }) 
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
 
   expect(page.locator(".user__name [type='text']").first()).toHaveText(data.username);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();




})
}