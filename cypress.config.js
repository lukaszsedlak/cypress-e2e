const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/report/partial",
      overwrite: false,
      html: false,
      json: true,
      charts: true,
    },
    specPattern: 'cypress/tests',
  },
});
