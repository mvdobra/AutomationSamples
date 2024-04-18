describe('linkedinLoginTest', () => {
    it('should login successfully', () => {

      // Access the www.linkedin.com websote.
      cy.visit('https://www.linkedin.com/');

      // Accept cookies
      cy.get('[action-type="ACCEPT"]').click();

      // Access the login page
      cy.get('.nav__button-secondary').click();

      // Insert the credentials
      cy.get('#username').type('yourEmail');
      cy.get('#password').type('yourPassword');

      // Access the login button
      cy.get('.btn__primary--large').click();

      // Assertion to ensure successful login
      cy.url().should('include', '/feed');
      
    });
  });