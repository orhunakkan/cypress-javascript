import { defineConfig } from 'cypress';
import { getEnvironment } from './cypress/utilities/environments.js';

const env = process.env.env || 'dev';
const environment = getEnvironment(env);

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    specPattern: 'cypress/tests/**/*.cy.js',
    baseUrl: environment.baseURL,
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
