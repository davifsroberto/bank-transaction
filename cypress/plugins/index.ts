/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on: object, config: object) => ({
  ...config,
  ...on,
});

export {};
