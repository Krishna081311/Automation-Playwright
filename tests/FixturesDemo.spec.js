const {test, expect} = require('@playwright/test');
const {customtest} = require("../Utils/fixtures.js");


customtest("Custom fixture execution", async ({authenticatedPage})=>{


    //await authenticatedPage.goto("https://www.shoppersstack.com"); // need to debug, it is not accepting URL in the custom fixture, so commented it out and added in the fixture file itself
    await authenticatedPage.waitForLoadState('networkidle');
    await expect(authenticatedPage).toHaveTitle("ShoppersStack | Home");

})


