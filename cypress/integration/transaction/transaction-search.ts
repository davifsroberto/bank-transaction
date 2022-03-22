import '@testing-library/cypress/add-commands';

describe('Transactions', () => {
  beforeEach(() => {
    cy.viewport(425, 736);
  });

  it('Should check if page is TRANSACTIONS', () => {
    cy.get('[data-testId="page-title"]').should(
      'have.text',
      'Sua movimentação bancária'
    );
  });

  it('should search a transaction by DESCRIPTION', () => {
    cy.get('[data-testId="description-search"]').type('pagou');

    cy.get('[data-testId="description-data"]').first().contains('Você pagou');

    cy.get('[data-testId="description-search"]').clear();
  });

  it('should search a transaction by INPUT type', () => {
    cy.get('[data-testId="type-search"]').select('input');

    cy.get('[data-testId="description-data"]')
      .first()
      .contains('Você adicionou');
  });

  it('should search a transaction by OUTPUT type', () => {
    cy.get('[data-testId="type-search"]').select('output');

    cy.get('[data-testId="description-data"]').first().contains('Você pagou');
  });
});
