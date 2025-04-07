import { test as base } from "playwright-bdd";

type DataShare = {
  dataContext: Record<string, any>;
};

export const test = base.extend<DataShare>({
  dataContext: async ({}, use) => {
    const context = {} as DataShare;
    await use(context);
  },
});
