describe('carturestiCarteTest', () => {

    // This test checks if the "carte" section can be accessed
    it('should can access the "carte" section', () => {
        // Accessing the carturesti.ro website
        cy.visit('https://www.carturesti.ro')
        
        // Accepting cookies
        cy.get('.cc-allow').click()
        
        // Accessing the main menu
        cy.get('span.ng-scope > .material-icons').click()
        
        // Navigating to the book section
        cy.get('[data-ng-href="/raft/carte-109"] > .ng-binding').click()
        
        // Waiting for one second to allow the page to load
        cy.wait(1000)

        // Checking if the URL contains the substring 'carte'
        cy.url().should('contain', 'carte')
    })
    
})