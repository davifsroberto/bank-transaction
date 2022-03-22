import '@testing-library/cypress/add-commands';
import { configure } from '@testing-library/cypress';

import './commands';

configure({ testIdAttribute: 'data-testid' });

before(() => {
  cy.visit('/');
});

beforeEach(() => {
  cy.viewport(414, 736);

  cy.wait(1500);
});
