describe('mobile e2e with full navigation', () => {
    beforeEach(() => {

        // opens up build webpage 
        cy.visit('http://localhost:4173/')

    })

    it('Full test for small phone screen', () => {

        // sets the viewport to a large sized phone
        cy.viewport('iphone-8')

        // open the burger menu
        cy.get('.burger-button-A').click()
        cy.get('.burger-button-B').click()

        // open the browse page menu
        cy.get('#itm-btn-B').click()

        // searches for dune; checks if there are three search card results; checks if the 
        // search button works and can find the first page element; clicks on element
        cy.get('.search-input-editor').type("dune")
        cy.get('.search-card-result').should('have.length', 3)
        cy.get('.search-input-button').click()
        cy.get('.actual-thumb:first').click()

        // check if the correct page is opened and the necessary items are visible for validation
        cy.get('.exp-subheader-title').should('be.visible')
        cy.get('.actual-expanded-thumb').should('be.visible')

        // returns back to the home page and clicks on the first page card 
        cy.get('.burger-button-A').click()
        cy.get('#itm-btn-A').click()
        cy.get('.actual-thumb:first').click()

        // checks if the correct items are visible in the expanded card page
        cy.get('.exp-subheader-title').should('be.visible')
        cy.get('.actual-expanded-thumb').should('be.visible')

        // returns back to the home page 
        cy.get('.burger-button-A').click()
        cy.get('#itm-btn-A').click()

        // checks if there are 20 cards in the trending page as expected
        cy.get('.page-card').should('have.length', 20)

    })
    it('Full test for tablet phone screen', () => {

        // sets the viewport to a large sized phone
        cy.viewport('ipad-mini')

        // open the burger menu
        cy.get('.burger-button-A').click()
        cy.get('.burger-button-B').click()

        // open the browse page menu
        cy.get('#itm-btn-B').click()

        // searches for dune; checks if there are three search card results; checks if the 
        // search button works and can find the first page element; clicks on element
        cy.get('.search-input-editor').type("dune")
        cy.get('.search-card-result').should('have.length', 3)
        cy.get('.search-input-button').click()
        cy.get('.actual-thumb:first').click()

        // check if the correct page is opened and the necessary items are visible for validation
        cy.get('.exp-subheader-title').should('be.visible')
        cy.get('.actual-expanded-thumb').should('be.visible')

        // returns back to the home page and clicks on the first page card 
        cy.get('.burger-button-A').click()
        cy.get('#itm-btn-A').click()
        cy.get('.actual-thumb:first').click()

        // checks if the correct items are visible in the expanded card page
        cy.get('.exp-subheader-title').should('be.visible')
        cy.get('.actual-expanded-thumb').should('be.visible')

        // returns back to the home page 
        cy.get('.burger-button-A').click()
        cy.get('#itm-btn-A').click()

        // checks if there are 20 cards in the trending page as expected
        cy.get('.page-card').should('have.length', 20)

    })
})