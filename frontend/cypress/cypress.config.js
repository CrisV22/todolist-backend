const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: "http://frontend:5173", // nome do serviço no Docker
    baseUrl: "http://localhost:5173/",
    supportFile: false,
    specPattern: "e2e/**/*.cy.js",
    screenshotsFolder: "screenshots",
    screenshotOnRunFailure: false,
    videosFolder: "videos",
    video: false,
    fixturesFolder: "fixtures",
    supportFolder: "support",
  },
});
