import { expect, type Locator, type Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginSSOPage extends BasePage {
  private email: Locator;
  private continueButton: Locator;

  constructor(page: Page) {
    super(page);
    this.email = page.locator(
      "//label[contains(text(),'Email')]/following-sibling::div/input"
    );
    this.continueButton = page.locator("button", { hasText: "Continue" });
  }

  async isOpen() {
    await expect(this.email).toBeVisible();
  }

  async clickContinue() {
    await this.continueButton.click();
  }
}
