const { test, expect } = require('@playwright/test');



test('@regression Test Annotations', async ({page})=>{

    console.log('Test 1');

})

test('@regression Test 2', async ({browserName})=>{

    test.skip(browserName == 'chromium');

})

test('@smoke Test 3', async ({page})=>{

    console.log('Test 3 for smoke');

})
