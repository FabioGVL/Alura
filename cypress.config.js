const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "chromeWebSecurity": false,
    "baseUrl": "https://3076-cypress-alurapic-front.vercel.app/#/home"
  },
});