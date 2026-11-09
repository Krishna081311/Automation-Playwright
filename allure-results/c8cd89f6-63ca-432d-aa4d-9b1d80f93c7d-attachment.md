# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndEcommerceScript.spec.js >> End to End Ecommerce Script  ADIDAS ORIGINAL 
- Location: tests\EndToEndEcommerceScript.spec.js:7:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.col-text')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e11] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [aria-hidden] [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - heading "Your Orders" [level=1] [ref=e26]
    - table [ref=e27]:
      - rowgroup [ref=e28]:
        - row [ref=e29]:
          - columnheader "Order Id" [ref=e30]
          - columnheader "Product Image" [ref=e31]
          - columnheader "Name" [ref=e32]
          - columnheader "Price" [ref=e33]
          - columnheader "Ordered Date" [ref=e34]
          - columnheader "View" [ref=e35]
          - columnheader "Delete" [ref=e36]
      - rowgroup [ref=e37]:
        - row [ref=e38]:
          - rowheader "6af1963c92a4341c4c0c7481" [ref=e39]
          - cell [ref=e40]
          - cell "ADIDAS ORIGINAL" [ref=e42]
          - cell "$ 11500" [ref=e43]
          - cell "Mon Nov 09" [ref=e44]
          - cell [ref=e45]:
            - button "View" [ref=e46] [cursor=pointer]
          - cell [ref=e47]:
            - button "Delete" [ref=e48] [cursor=pointer]
        - row [ref=e49]:
          - rowheader "6abcb3b82be7a4bc2b7be4db" [ref=e50]
          - cell [ref=e51]
          - cell "ADIDAS ORIGINAL" [ref=e53]
          - cell "$ 11500" [ref=e54]
          - cell "Wed Sep 30" [ref=e55]
          - cell [ref=e56]:
            - button "View" [ref=e57] [cursor=pointer]
          - cell [ref=e58]:
            - button "Delete" [ref=e59] [cursor=pointer]
        - row [ref=e60]:
          - rowheader "6abbbc092be7a4bc2b79e601" [ref=e61]
          - cell [ref=e62]
          - cell "ADIDAS ORIGINAL" [ref=e64]
          - cell "$ 11500" [ref=e65]
          - cell "Tue Sep 29" [ref=e66]
          - cell [ref=e67]:
            - button "View" [ref=e68] [cursor=pointer]
          - cell [ref=e69]:
            - button "Delete" [ref=e70] [cursor=pointer]
    - generic [ref=e71]: "* If orders Will be more than 7 your last order will get deleted"
  - generic [ref=e73]:
    - button "Go Back to Shop" [ref=e74] [cursor=pointer]
    - button "Go Back to Cart" [ref=e75] [cursor=pointer]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const {POManager} = require('../Pages/POManager');
  3  | const dataset = JSON.parse(JSON.stringify(require('../TestData/loginTestData.json')));
  4  | 
  5  | for(const data of dataset)
  6  | {
  7  | test(`End to End Ecommerce Script  ${data.ProductName} `, async ({page})=>{
  8  | 
  9  |     const poManager = new POManager(page);
  10 | 
  11 | const URL = "https://rahulshettyacademy.com/client";
  12 | 
  13 | const loginPage = poManager.getLoginPage();
  14 | const dashboardPage = poManager.getDashboardpage();
  15 | 
  16 | await loginPage.goTo(URL);
  17 | await loginPage.validLogin(data.username, data.Password);
  18 | 
  19 | 
  20 | const Products = page.locator('.card-body');
  21 | 
  22 | await page.locator('.card-body b').first().waitFor();
  23 | const ProductsList = await page.locator('.card-body b').allTextContents();
  24 | 
  25 | console.log(ProductsList);
  26 | 
  27 | const count = await Products.count();
  28 | 
  29 | console.log(count);
  30 | 
  31 | 
  32 | for (let i=0; i< count; ++i)
  33 | {
  34 | if ( await Products.nth(i).locator("b").textContent() === data.ProductName)
  35 | {
  36 | 
  37 | await Products.nth(i).locator("text=  Add To Cart").click();
  38 | const Product = await Products.nth(i).locator('b').textContent();
  39 | console.log(Product);
  40 | break;
  41 | 
  42 | }
  43 | 
  44 | }
  45 | 
  46 | await page.locator('[routerlink="/dashboard/cart"]').click();
  47 | await page.locator("div li").first().waitFor();
  48 | 
  49 | 
  50 |    await page.locator("text=Checkout").click();
  51 |  
  52 |   await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 }) 
  53 |    const dropdown = page.locator(".ta-results");
  54 |    await dropdown.waitFor();
  55 |    const optionsCount = await dropdown.locator("button").count();
  56 |    for (let i = 0; i < optionsCount; ++i) {
  57 |       const text = await dropdown.locator("button").nth(i).textContent();
  58 |       if (text === " India") {
  59 |          await dropdown.locator("button").nth(i).click();
  60 |          break;
  61 |       }
  62 |    }
  63 |  
  64 |    expect(page.locator(".user__name [type='text']").first()).toHaveText(data.username);
  65 |    await page.locator(".action__submit").click();
  66 |    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  67 |    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  68 |    console.log(orderId);
  69 |  
  70 |    await page.locator("button[routerlink*='myorders']").click();
  71 |    await page.locator("tbody").waitFor();
  72 |    const rows = page.locator("tbody tr");
  73 |  
  74 |  
  75 |    for (let i = 0; i < await rows.count(); ++i) {
  76 |       const rowOrderId = await rows.nth(i).locator("th").textContent();
  77 |       if (orderId.includes(rowOrderId)) {
  78 |          await rows.nth(i).locator("button").first().click();
  79 |          break;
  80 |       }
  81 |    }
> 82 |    const orderIdDetails = await page.locator(".col-text").textContent();
     |                                                           ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  83 |    expect(orderId.includes(orderIdDetails)).toBeTruthy();
  84 | 
  85 | 
  86 | 
  87 | 
  88 | })
  89 | }
```