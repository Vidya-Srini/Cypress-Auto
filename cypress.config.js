const { defineConfig } = require("cypress");
// promisified fs module
const fs = require('fs-extra')
const path = require('path')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // accept a configFile value or use development by default
      const file = config.env.configFile || 'dev'
      const pathToConfigFile = path.resolve('.', 'cypress', 'config', `${file}.json`)
      return fs.readJson(pathToConfigFile)
    },
  },
});
/// <reference types="cypress" />