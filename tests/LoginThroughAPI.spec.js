const { test, expect, request } = require('@playwright/test');

const loginPayLoad = {userEmail: "krishna2211@gmail.com", userPassword: "Krishna@2211"};
let Token;

test.beforeAll(async () => {

    const APIContext = await request.newContext({
    ignoreHTTPSErrors: true, // Bypasses SSL certificate verification
  }    );
    const loginResponse = await APIContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', 
        {data: loginPayLoad}
    );


    expect (loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    Token = loginResponseJson.token;

}
)






test('Naviagte to Client APP Dashboard Page', async ({ page }) => {


      await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, Token);

    await page.goto('https://rahulshettyacademy.com/client');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveTitle("Let's Shop");
    await expect(page.getByText(' Home | ').last()).toBeVisible();

});