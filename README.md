# FLECS-UI-TEST-AUTOMATION

## Prerequisites

1. Install Node v20.19.0 version or latest.
2. Install Visual Studio Code or any IDE that supports Typescript.

## How to Install

1. Clone this repository.
2. Navigate into cloned repository directory by terminal.
3. Execute `npm install`.

## How to run tests

1. Create `.env` file in the root of the project and add these env variables:
   ```env
   BASE_DEV_URL=https://pmt-webadmin-ec-881.internal.rxsense.com
   MONOLITH_API_DEV_URL=https://pmt-api-ec-881.internal.rxsense.com
   ELIGIBILITY_API_DEV_URL=https://devrxsenseeligibilityservice.internal.rxsense.com
   USEREMAIL={your_useremail}
   PASSWORD={your_password}
   ```

2. Run the tests:

   - Headless mode in QA: `npm run test:qa`
   - UI mode in QA: `npm run test:qa:ui`
   - Headless mode in dev: `npm run test:dev`
   - UI mode in dev: `npm run test:dev:ui`
