describe('mihaivaleriudobraroTest', () => {

    it('should access mihaivaleriudobra.ro href', () => {
        // Access the www.mihaivaleriudobra.ro website.
        cy.visit('https://www.mihaivaleriudobra.ro/')

        // This verifies if the website is accessible.
        cy.get('.nameTitle > p').should('contain', 'Mihai-Valeriu Dobra')

        cy.wait(2000)

        // Access the mihaivaleriudobra.ro link from the business card.
        cy.get('.contact-info > :nth-child(3) > a').click()

        cy.wait(2000)

        // Verify if the www.mihaivaleriudobra.ro website (href) is opened.
        cy.url().should('include', 'mihaivaleriudobra')
    });

});
