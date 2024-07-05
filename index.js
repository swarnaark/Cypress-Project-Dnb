import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
      return false; // Prevents Cypress from failing the test
    }
});