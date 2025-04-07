import { expect, type Locator, type Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class HomePage extends BasePage {
  private logoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.logoutButton = page.locator("button", { hasText: "Logout" });
  }

  async isOpen() {
    await expect(this.logoutButton).toBeVisible();
  }
}
