Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
before(function() {
    cy.visit('/')
})