

const { test, expect } = require('@playwright/test');


const USER_NAME = process.env.USER_NAME
const PASSWORD =  process.env.PASSWORD


test('Autorization with valid data', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill(USER_NAME)
  await page.locator('#password').fill(PASSWORD)
  await page.locator('#login-button').click()

  // Expect that user logged in successfully and is on 'products' dashboard
  await expect(page.getByText('Products')).toBeVisible()
});

test('Autorization with invalid username and valid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('invalid_user')
  await page.locator('#password').fill(PASSWORD)
  await page.locator('#login-button').click()

  // Expect that error message is displayed
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
});

test('Autorization with valid username and invalid password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill(USER_NAME)
  await page.locator('#password').fill('Invalid_password')
  await page.locator('#login-button').click()

  // Expect that error message is displayed
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
});
