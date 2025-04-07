import { mergeTests } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test as apiFixture } from "./api.fixture";
import { test as dataSharedFixture } from "./data-share.fixture";

export const test = mergeTests(apiFixture, dataSharedFixture);

export const { Given, When, Then } = createBdd(test);
