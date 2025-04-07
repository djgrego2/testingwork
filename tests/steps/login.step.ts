import { createBdd } from 'playwright-bdd';
import { HomePage, LoginEmailPasswordPage, LoginSSOPage } from '../../src/pages';

const { Given, When, Then } = createBdd();

Given('user logs in rxsense', async ({ page }) => {
  const loginSsoPage = new LoginSSOPage(page);
  const loginEmailPwdPage = new LoginEmailPasswordPage(page);
  const homePage = new HomePage(page);
  
  await page.goto('/');
  await loginSsoPage.clickContinue();
  await loginEmailPwdPage.login(process.env.USEREMAIL!, process.env.PASSWORD!);
  await homePage.isOpen();
});