describe('linkedinLoginTest', () => {
    it('should login successfully', () => {

      // Access the www.linkedin.com websote.
      cy.visit('https://www.linkedin.com/');

      cy.wait(2000);

      // Accept cookies
      cy.get('[action-type="ACCEPT"]').click();

      cy.wait(1000);

      // Access the login page
      cy.get('.nav__button-secondary').click();

      cy.wait(1000);

      // Insert the credentials
      cy.get('#username').type('typeEmail');
      cy.get('#password').type('typePassword');

      cy.wait(1000);

      // Access the login button
      cy.get('.btn__primary--large').click();

      cy.wait(1000);

      // Assertion to ensure successful login
      cy.url().should('include', '/feed');
      
    });
  });