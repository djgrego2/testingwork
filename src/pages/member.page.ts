import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class MemberPage extends BasePage {
  private fullNameLabel: Locator;

  constructor(page: Page) {
    super(page);
    this.fullNameLabel = page.locator("header h1");
  }

  async isOpen() {
    await expect(this.fullNameLabel).toBeVisible();
  }
}
