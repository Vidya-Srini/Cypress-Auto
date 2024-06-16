Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
// before(function() {
//     cy.visit('/')
//     cy.get('.nav > :nth-child(2) > a').click()
//     cy.get('#email').click().type(Cypress.env('user_username'))
//     cy.get('#password').click().type(Cypress.env('user_password'))
//     cy.get('#last').click()
// })

Cypress.Commands.add('login', (email, password) => { 
    cy.visit('https://demoapp.skillrary.com')
    cy.get('.nav > :nth-child(2) > a').click()
    cy.get('#email').click().type(email)
    cy.get('#password').click().type(password)
    cy.get('#last').click()
 })
 
 beforeEach(() => {
    cy.login('admin','admin')
})