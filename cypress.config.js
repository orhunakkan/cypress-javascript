import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Register the grep plugin
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    specPattern: 'cypress/tests/**/*.cy.js',
  },
});
