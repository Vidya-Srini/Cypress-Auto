describe('Login to nop', () => {
    it('Login to nop commerce', () => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.contains('Log in').click()
        cy.get('#Email').click().clear().type('abc963@gmail.com')
        cy.get('#Email').should('have.value','abc963@gmail.com')
        cy.get('#Password').click().clear().type('abc123')
        cy.get('#Password').should('have.value','abc123')
        cy.get('.login-button').click()
        cy.contains('My account').should('be.visible')
    })
})