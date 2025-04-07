import { expect, type Locator, type Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginEmailPasswordPage extends BasePage {
  private email: Locator;
  private password: Locator;
  private logInButton: Locator;

  constructor(page: Page) {
    super(page);
    this.email = page.locator(
      "//label[contains(text(),'Email')]/following-sibling::div/input"
    );
    this.password = page.locator(
      "//label[contains(text(),'Password')]/following-sibling::div/input"
    );
    this.logInButton = page.locator("button", { hasText: "Log in" });
  }

  async isOpen() {
    await expect(this.password).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.logInButton.click();
  }

}
