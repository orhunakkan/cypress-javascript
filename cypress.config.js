import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config
    },
    specPattern: 'cypress/tests/**/*.cy.js',
    baseUrl: 'https://the-internet.herokuapp.com/',
    defaultBrowser: 'edge',
    defaultCommandTimeout: 30000,
    experimentalRunAllSpecs: true,
    retries: process.env.CI ? 1 : 0,
    screenshotOnRunFailure: false,
    video: false,
    numTestsKeptInMemory: process.env.CI ? 4 : 50,
  },
  env: {
    ignoreHttpErrors: true,
  }
})
