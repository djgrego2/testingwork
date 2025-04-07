import { expect, type Locator, type Page } from '@playwright/test';
import { FilterFirstSearch, FilterThenSearch, Member } from '../model';
import { BasePage } from './base.page';

export class EligibilityPage extends BasePage {
  private searchButton: Locator;

  constructor(page: Page) {
    super(page);
    this.searchButton = page.locator("button", { hasText: "Search" });
  }

  async goToEligibilityV2() {
    await this.page.goto("/member/search/v2");
  }

  async isOpen() {
    await expect(this.searchButton).toBeVisible();
  }

  async filterFirstSearchBy(option: string) {
    await this.page.locator('#select_first-search-by-toggle-button').click();
    await this.page.locator('li', { hasText: option }).click();
  }

  async filterThenSearchBy(option: string) {
    await this.page.locator('#select_then-search-by-toggle-button').click();
    await this.page.locator('li', { hasText: option }).click();
  }

  async searchByUniqueId(uniqueId: string) {
    await this.filterFirstSearchBy(FilterFirstSearch.MemberInfo);
    await this.filterThenSearchBy(FilterThenSearch.UniqueId);
    await this.page.locator('#input_unique-id').fill(uniqueId);
    await this.searchButton.click();
  }

  async clickOnMemberResult(index: number) {
    await this.page.locator(`[data-testid="table-row__${index}"]`).click();
  }

  async getMemberFromResults(index: number): Promise<Record<string, string>> {
    const member:Record<string, string> = {}; 
    const patientName = this.page.locator(`td[data-testid="table-cell__${index}_Patient Name__${index}"]`);
    const patientDob = this.page.locator(`td[data-testid="table-cell__${index}_DateOfBirth__${index}"]`);
    const cardHolderId = this.page.locator(`td[data-testid="table-cell__${index}_CardholderId__${index}"]`);
    const uniqueId = this.page.locator(`td[data-testid="table-cell__${index}_UniqueId__${index}"]`);
    const relationshipCode = this.page.locator(`td[data-testid="table-cell__${index}_RelationshipCode__${index}"]`);
    const personCode = this.page.locator(`td[data-testid="table-cell__${index}_PersonCode__${index}"]`);
    const groupNumber = this.page.locator(`td[data-testid="table-cell__${index}_GroupNumber__${index}"]`);
    const organizationNumber = this.page.locator(`(//td[@data-testid="table-cell__${index}_OrgCarrierAccount__${index}"]/span)[1]`);
    const carrierNumber = this.page.locator(`(//td[@data-testid="table-cell__${index}_OrgCarrierAccount__${index}"]/span)[2]`);
    const accountNumber = this.page.locator(`(//td[@data-testid="table-cell__${index}_OrgCarrierAccount__${index}"]/span)[3]`);
    const effectiveDateRange = this.page.locator(`td[data-testid="table-cell__${index}_EffectiveDateRange__${index}"]`);
    const personalRepresentative = this.page.locator(`td[data-testid="table-cell__${index}_PersonalRepresentative__${index}"]`);
    member.patientName = (await patientName.textContent())!;
    member.patientDob = (await patientDob.textContent())!;
    member.cardHolderId = (await cardHolderId.textContent())!;
    member.uniqueId = (await uniqueId.textContent())!;
    member.relationshipCode = (await relationshipCode.textContent())!;
    member.personCode = (await personCode.textContent())!;
    member.groupNumber = (await groupNumber.textContent())!;
    member.organizationNumber = (await organizationNumber.textContent())!;
    member.carrierNumber = (await carrierNumber.textContent())!;
    member.accountNumber = (await accountNumber.textContent())!;
    member.effectiveDateRange = (await effectiveDateRange.textContent())!;
    member.personalRepresentative = (await personalRepresentative.textContent())!;
    return member;
  }

}
