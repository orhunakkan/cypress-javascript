import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) { },
    specPattern: 'cypress/tests/**/*.cy.js',
    baseUrl: 'https://the-internet.herokuapp.com/',
  },
})
