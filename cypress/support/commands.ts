Cypress.Commands.overwrite(
  'type',
  (originalFn, subject, text, options = {}) => {
    options.delay = 500;

    return originalFn(subject, text, options);
  }
);

export {};
