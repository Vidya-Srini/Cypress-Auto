describe('ECommerce Registration', () => {
    it('Register', () => {
      cy.visit('https://demo.nopcommerce.com/')
      cy.get('.ico-register').click();
      cy.get('#gender-female').click();
      cy.get('#FirstName').type('Sushma');
      cy.get('#LastName').type('Kashyap');
      cy.get('select[name="DateOfBirthDay"]').select("14");
      cy.get('select[name="DateOfBirthMonth"]').select("6");
      cy.get('select[name="DateOfBirthYear"]').select("1998");
      cy.get('#Email').type('abc963@gmail.com');
      cy.get('#Password').type('abc123');
      cy.get('#ConfirmPassword').type('abc123');
      cy.get('.register-next-step-button').click();
    })
  })