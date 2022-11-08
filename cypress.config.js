const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5nmvah',
  e2e: {
    reporter: "junit",
    reporterOptions: {
      mochaFile: "allure-results/test_report_[hash].xml",
      toConsole: true,
      overwrite:false,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
