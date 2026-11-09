const {test, expect} = require('@playwright/test');
const { text } = require('node:stream/consumers');



test('Select Dropdown', async ({page})=>{

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
const UserName = page.locator("input#username");
const Password = page.locator("input#password");
const Dropdown = page.locator("select.form-control");

await UserName.fill("Krishna@gmail.com");
await Password.fill("Password@123");
await Dropdown.selectOption("consult");

await page.locator("span.radiotextsty").last().click();
await page.locator("button#okayBtn").click();
const Radiobtn = expect(await page.locator("span.radiotextsty").last()).toBeChecked();

console.log(Radiobtn);

await page.locator("#terms").click();

const checkbox = expect( page.locator("#terms")).toBeChecked();

console.log(checkbox);

const blinkingText = await expect(page.locator('a.blinkingText').first()).toHaveAttribute('class', "blinkingText");

console.log(blinkingText);


// await page.pause();



});