import {test, expect} from '@playwright/test';
import 'dotenv/config';
test("our first playwright test", async ({page})=>
{
    await page.goto(process.env.baseURl);
    await expect(page).toHaveTitle("Swag Labs");
    await page.pause();

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

test.only('drag and drop', async ({page})=>
{
    await page.goto(process.env.demoqabaseurl);
    await page.pause();
    const source = await page.locator("#draggable");
    const target = await page.locator("//p[text()='Drop Here']");
    await source.dragTo(target);

}
)
