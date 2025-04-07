import { APIRequestContext, request } from "@playwright/test";
import { test as base } from "playwright-bdd";

export type APIRequestOptions = {
  monolithApiURL: string;
  eligibilityApiURL: string;
};

type APIRequestFixture = {
  monolithApiContext: APIRequestContext;
  eligibilityApiContext: APIRequestContext;
};

export const test = base.extend<APIRequestOptions & APIRequestFixture>({
  monolithApiURL: ["", { option: true }],
  eligibilityApiURL: ["", { option: true }],

  monolithApiContext: async ({ monolithApiURL }, use) => {
    const apiRequestContext = await request.newContext({
      baseURL: monolithApiURL,
    });

    await use(apiRequestContext);
    await apiRequestContext.dispose();
  },

  eligibilityApiContext: async ({ eligibilityApiURL }, use) => {
    const apiRequestContext = await request.newContext({
      baseURL: eligibilityApiURL,
    });

    await use(apiRequestContext);
    await apiRequestContext.dispose();
  },
});
