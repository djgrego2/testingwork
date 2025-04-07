import { expect } from "@playwright/test";
import { Given, When, Then } from "../../../src/fixtures/custom.fixture";
import { EligibilityPage } from "../../../src/pages";

Given("user searches member by unique id", async ({ page, dataContext }) => {
  const eligibilityPage = new EligibilityPage(page);
  await eligibilityPage.goToEligibilityV2();
  await eligibilityPage.isOpen();
  await eligibilityPage.searchByUniqueId(dataContext.member.id);
});

Then("the member should be displayed in the results number {int}",async ({ page, dataContext }, index) => {
  const eligibilityPage = new EligibilityPage(page);
  const actualMember = await eligibilityPage.getMemberFromResults(index)
  const expectedMember = dataContext.member;
  expect.soft(actualMember.patientName).toEqual(expectedMember.getFullName());
  expect.soft(actualMember.patientDob).toEqual(expectedMember.getDateOfBirth());
  expect.soft(actualMember.cardHolderId).toEqual(expectedMember.coverages?.[0].cardHolderId);
  expect.soft(actualMember.uniqueId).toEqual(expectedMember.id);
  expect.soft(actualMember.relationshipCode).toEqual(expectedMember.coverages?.[0].relationshipCode?.toString());
  expect.soft(actualMember.personCode).toEqual(expectedMember.coverages?.[0].getPersonCode());
  expect.soft(actualMember.groupNumber).toEqual(expectedMember.coverages?.[0].groupNumber);
  expect.soft(actualMember.organizationNumber).toEqual(expectedMember.coverages?.[0].organizationNumber);
  expect.soft(actualMember.carrierNumber).toEqual(expectedMember.coverages?.[0].carrierNumber);
  expect.soft(actualMember.accountNumber).toEqual(expectedMember.coverages?.[0].accountNumber);
  expect.soft(actualMember.effectiveDateRange).toEqual(expectedMember.coverages?.[0].getEffectiveDateRange());
  if (expectedMember.personalRepresentatives?.length! > 0) {
    expect.soft(actualMember.personalRepresentative).toEqual(expectedMember.getFullName());
  } else {
    expect.soft(actualMember.personalRepresentative).toEqual('--');
  }
});
