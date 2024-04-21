describe ('ddgSearchTest', () => {

it ('should perform a successful search', () => {
    // Visit DuckDuckGo search engine
    cy.visit('https://www.duckduckgo.com')

    // Clear cookies
    cy.clearCookies()

    cy.wait(1000)

    // Visit DuckDuckGo search engine after cookies was cleared
    cy.visit('https://www.duckduckgo.com')

    cy.wait(1000)

    // Type the search input "Time in New York now"
    cy.get('#searchbox_input').type('Time in New York now').type('{enter}')

    cy.wait(2000)

    // Verify if the time for New York is returned in top of the search list
    cy.get('.d3sXpYMmDKnqC90dk5P7').should('contain', ':')
    cy.get('.Og3KYY41jRqNR95FGbz_').should('contain', 'New York')
})

})