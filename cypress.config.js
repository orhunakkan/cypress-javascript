import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    specPattern: 'cypress/tests/**/*.cy.js',
    baseUrl: process.env.ENV,
    defaultBrowser: 'edge',
    defaultCommandTimeout: 30000,
    experimentalRunAllSpecs: true,
    retries: process.env.CI ? 1 : 0,
    screenshotOnRunFailure: true,
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/cypress-reports',
      overwrite: true,
      html: true,
      json: true,
    },
  },
  env: {
    ignoreHttpErrors: true,
  },
});
