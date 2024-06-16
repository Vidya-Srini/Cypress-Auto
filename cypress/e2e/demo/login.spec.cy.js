/// <reference types="Cypress" />
describe('Login to application, validating Home and Dashboard & Click on push menu', ()=> {
  
    it('Validate Home and Dashboard' , ()=> {
        cy.wait(3000)
        cy.get('.breadcrumb li').eq(0).should('be.visible')
        cy.get('.breadcrumb li').eq(0).should('contain.text','Home')
        cy.get('.breadcrumb li').eq(1).should('be.visible').and('include.text','Dashboard')
        cy.wait(3000)
    })
    it('Click on Push Menu' , ()=> {
        cy.wait(3000)
       cy.get('[data-toggle="push-menu"]').should('be.visible')
       cy.get('[data-toggle="push-menu"]').click()
       cy.wait(3000)
    })

})