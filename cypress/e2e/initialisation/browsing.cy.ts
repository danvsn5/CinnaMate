describe('browse-page', () => {
    beforeEach(() => {

        // opens up dev webpage 
        cy.visit('http://localhost:5173/browser')

    })

    it('displays eight trending cards', () => {

        // query is generates and checks whether or not eight
        // cards are visible on the page

        cy.get('.page-card').should('have.length', 8)
        cy.get('.page-card').should('be.visible', 8)
    })

    it('displays three output query search cards and terminates once search is active', () => {

        // query is generated and checks whether or not eight
        // cards are visible on the page

        cy.get('.search-input-editor').type("dune")
        cy.get('.search-card-result').should('have.length', 3)
        cy.get('.search-card-result').should('be.visible', 3)
        cy.get('.search-input-button').click()
        cy.get('.page-card').should('have.length', 8)
        cy.get('.page-card').should('be.visible', 8)
        cy.get('.search-card-result').should('not.exist')

    })

    it('displays singular output query search card and terminates once search is active', () => {

        // query is generated and checks whether or not eight
        // cards are visible on the page

        cy.get('.search-input-editor').type("shutter island")
        cy.get('.search-card-result').should('have.length', 1)
        cy.get('.search-card-result').should('be.visible')
        cy.get('.search-input-button').click()
        cy.get('.page-card').should('have.length', 1)
        cy.get('.page-card').should('be.visible', 1)
        cy.get('.search-card-result').should('not.exist')

    })

    it('check if horizontally scrollable for medium sized laptops', () => {

        // sets viewport to medium laptop size for automated scroll testing


        cy.viewport("macbook-11")

        cy.scrollTo("right");
        cy.window().its("scrollX").should("equal", 0);

    })

    it('check if horizontally scrollable for tablets', () => {

        // sets viewport to tablet size for automated scroll testing


        cy.viewport("ipad-mini")

        cy.scrollTo("right");
        cy.window().its("scrollX").should("equal", 0);

    })

    it('check if horizontally scrollable for large phones', () => {

        // sets viewport to large phone size for automated scroll testing


        cy.viewport("samsung-note9")
        cy.scrollTo("right");
        cy.window().its("scrollX").should("equal", 0);

    })

    it('check if horizontally scrollable for smaller phones', () => {

        // sets viewport to small phone size for automated scroll testing

        cy.viewport("iphone-8")
        cy.scrollTo("right");
        cy.window().its("scrollX").should("equal", 0);

    })

})