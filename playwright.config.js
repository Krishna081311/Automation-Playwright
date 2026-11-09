// @ts-check
import { defineConfig, devices, expect } from '@playwright/test';
import { TIMEOUT } from 'node:dns';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig ({
  testDir: './tests',
  timeout : 30000,
  expect: {
    timeout : 30000
  },
  
  reporter: "allure-playwright",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName : 'chromium',
    headless : false,
    viewport: null,
    launchOptions: {
          args: ['--start-maximized'] 
    },

    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',

  },

  
});
