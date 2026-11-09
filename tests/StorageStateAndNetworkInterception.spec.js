const { test, expect} = require('@playwright/test');

let webContext;
const fakePayLoadOrders = { data: [], message: "No Orders" };

test.beforeAll(async ({browser})=> {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator('#userEmail').fill("krishna2211@gmail.com");
    await page.locator('#userPassword').fill("Krishna@2211");
    await page.locator('#login').click();

    await page.waitForLoadState('networkidle');

    await context.storageState({path: 'state.json'});
    
    webContext = await browser.newContext({storageState: 'state.json'});

})



test('Edit from cart', async () => {
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/dashboard/cart");    
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('My Cart')).toBeVisible();

    

})

test('Verify Order History', async ()=>{
    
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");    
    await page.waitForLoadState('networkidle');


    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    async route => {
      const response = await page.request.fetch(route.request());
      let body = JSON.stringify(fakePayLoadOrders);
      route.fulfill(
        {
          response,
          body, 
 
        });
      //intercepting response -APi response-> { playwright fakeresponse}->browser->render data on front end
    });
 
  await page.locator("button[routerlink*='myorders']").click();
  await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
 
  console.log(await page.locator(".mt-4").textContent());


})