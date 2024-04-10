const { test, expect } = require('@playwright/test');

const {USER_NAME, PASSWORD} = require('../variables')

test('Verify that All Items, About, Logout, Reset App State, and X fields exist', async ({ page }) => {

    await page.goto('/');
    await page.locator('#user-name').fill(USER_NAME)
    await page.locator('#password').fill(PASSWORD)
    await page.locator('#login-button').click()
    await page.locator('#react-burger-menu-btn').click()
    await expect(page.locator('#inventory_sidebar_link')).toHaveText('All Items')
    await expect(page.locator('#about_sidebar_link')).toHaveText('About')
    await expect(page.locator('#logout_sidebar_link')).toHaveText('Logout')
    await expect(page.locator('#reset_sidebar_link')).toHaveText('Reset App State')
    await expect(page.locator('#react-burger-cross-btn')).toBeVisible()



});
test('Verify that the All Items menu item redirects to the Products page.', async ({ page }) => {

    await page.goto('/');
    await page.locator('#user-name').fill(USER_NAME)
    await page.locator('#password').fill(PASSWORD)
    await page.locator('#login-button').click()
    await page.locator('#item_4_title_link').click()
    await expect(page.locator('#back-to-products')).toBeVisible()
    await page.locator('#react-burger-menu-btn').click()
    await expect(page.locator('#inventory_sidebar_link')).toHaveText('All Items')
    await page.locator('#inventory_sidebar_link').click()
    await expect(page.locator('[data-test="title"]')).toHaveText('Products')
});

 

