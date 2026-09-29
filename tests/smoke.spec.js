import {test, expect} from '@playwright/test';
import 'dotenv/config';
import logger from '../utils/logger';
import { loggers } from 'winston';

test("our first playwright test", async ({page})=>
{
    await page.goto(process.env.baseURl);
    await expect(page).toHaveTitle("Swag Labs");        
    await page.pause();
    logger.info("my first log for playwright test");
                    
    await page.locator("//input[@placeholder='Username']").fill("standard_user");
    await expect(page.locator("//input[@placeholder='Username']")).toHaveValue("standard_user");
    await page.locator("//input[@placeholder='Password']").fill("secret_sauce");

    await page.locator("//input[@id='login-button']").click();

    // await page.waitForTimeout(10000);
    // await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();
    // await page.locator("//div[@id='shopping_cart_container']").click();
    // await page.locator("//button[@id='checkout']").click();
    // await page.locator("//input[@Placeholder='First Name']").fill("Mohammed");
    // await page.locator("//input[@Placeholder='Last Name']").fill("Abideen");
    // await page.locator("//input[@id='postal-code']").fill('560002');
    // await page.locator("//input[@id='continue']").click();
    // await page.locator("//button[@id='finish']").click();
    // await page.locator("//button[@id='back-to-products']").click();

    // validation starts from below

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible();
    await expect(page.locator("//span[@class='title']")).toHaveText("Products");
}
)

test('drag and drop', async ({page})=>
{
    await page.goto(process.env.demoqabaseurl);
    await page.pause();
    const source = await page.locator("#draggable");
    const target = await page.locator("//p[text()='Drop Here']");
    await source.dragTo(target);

}
)
// inbuilt locators 

test("Playwright inbuilt locators", async({page})=>
{
    await page.goto(process.env.baseURl);
    await page.pause();
    await expect(page.getByTitle("Swag Labs")).toBeVisible();
    logger.info("we are using Playwright inbuilt locators");
    logger.info("---getbyplaceholder---");
    await page.getByPlaceholder("Username").fill(process.env.user_name);
    await page.getByPlaceholder("Password").fill(process.env.password);
    logger.info("---getByRoLe---");
    await page.getByRole("button",{name:'Login'}).click();
    logger.info("---getbytestid---")
    await page.getByTestId("add-to-cart-sauce-labs-backpack").click();
    logger.info("---getbytext---")
    await expect(page.getByText("Products")).toBeVisible();

}
)
test("file upload", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.pause();
    await page.locator("//input[@id='file-upload']").setInputFiles("testdata/sample.txt");
    await page.locator("//input[@id='file-submit']").click();

})

// test.only("file uploads", async ({ page }) => {

//     await page.goto("https://the-internet.herokuapp.com/upload", {
//         waitUntil: "domcontentloaded",
//         timeout: 60000
//     });

//     await page.locator("#file-upload")
//         .setInputFiles("C:\\Users\\USER\\Desktop\\sample.txt");

//     await page.locator("#file-submit").click();

// });

//visual testing

test("visual testing", async({page})=>{

    await page.pause();
    await page.goto("https://www.instagram.com/");
    await expect(page).toHaveTitle("Instagram");
    
    expect(await page.screenshot()).toMatchSnapshot("insta.png"); 
})

//handle alerts 

test("@smoke handle alerts and confirm", async({page})=>{

    await page.pause();
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on("dialog", async dialog=>{
        await dialog.accept();

})
// await page.locator("//button[text()='Click for JS Alert']").click();
   await page.locator("//button[text()='Click for JS Confirm']").click();  
})   

test("handle confirm", async({page})=>{

    await page.pause();
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on("dialog", async dialog=>{
        await dialog.dismiss();

})
await page.locator("//button[text()='Click for JS Confirm']").click();
})   

test("handle prompts", async({page})=>{

    await page.pause();
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on("dialog", async dialog=>{
        await dialog.accept("Hi");

})
await page.locator("//button[text()='Click for JS Prompt']").click();
})   

//handling webtables 
test("handle webtables", async({page})=>{
    await page.pause();
    await page.goto("https://www.w3schools.com/html/html_tables.asp");
    let row=await page.locator("//table[@id='customers']//tr");
    console.log("number of rows in the table are: "+await row.count());
    for(let i=0; i<await row.count(); i++)
    {
        let rowText=await row.nth(i).textContent();
        console.log(rowText);
    }
})

//handling iframes

test("handle iframes", async({page})=>{
    await page.pause();
    await page.goto("https://www.w3schools.com/html/html_iframe.asp");
    await page.frameLocator("//iframe[@title='W3Schools HTML Tutorial']").locator("//span[text()='Sign In']").click();    

})

