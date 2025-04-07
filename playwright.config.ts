import { test as base, defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';
import type { APIRequestOptions } from './src/fixtures/api.fixture';

dotenv.config();

// Transform PMT urls
const baseDevURL = process.env.BASE_DEV_URL!.replace('${PMT}', process.env.PMT!);
const monolithDevURL = process.env.MONOLITH_API_DEV_URL!.replace('${PMT}', process.env.PMT!);

const testDir = defineBddConfig({
  features: 'tests/features/**/*.feature',
  steps: ['tests/steps/**/*.ts', 'src/fixtures/**/*.ts']
});

export default defineConfig<APIRequestOptions>({
  testDir,
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'QA',
      use: { 
        baseURL: 'https://qawebadmin.internal.rxsense.com',
        monolithApiURL: 'https://qaapi.internal.rxsense.com',
        eligibilityApiURL: process.env.ELIGIBILITY_API_QA_URL
      }
    },
    {
      name: 'DEV',
      use: { 
        baseURL: baseDevURL,
        monolithApiURL: monolithDevURL,
        eligibilityApiURL: process.env.ELIGIBILITY_API_DEV_URL
      }
    }
  ]
});