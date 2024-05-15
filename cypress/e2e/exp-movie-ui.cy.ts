describe('browse-page', () => {
    beforeEach(() => {

        // opens up dev webpage 
        cy.visit('http://localhost:4173/')
        cy.get('.actual-thumb:first').click()
    })

    it('check return exists', () => {
        cy.viewport('macbook-16')

        // query is generates and checks whether exp button is visible
        cy.get('.exp-return-button').should('be.visible')
    })

    it('check return exists for tablet', () => {
        cy.viewport('ipad-mini')
        // query is generates and checks whether exp button is visible
        cy.get('.exp-return-button').should('not.exist')
    })

    it('check return exists for small phone', () => {
        cy.viewport('iphone-8')
        // query is generates and checks whether exp button is visible
        cy.get('.exp-return-button').should('not.exist')
    })


})