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

    it('check if the items from searching list are all the same height', () => {
        // searches for pl in input box
        cy.get('.search-input-editor').type("pl")
        cy.get('.search-card-title:first').then((element) => {
            // gets the height of the text in the first box, assuming no wrapping
            let height = element.height();
            // height of text in last box should be equal; if they are equal, then
            // their thumbnail cards will be of the same size
            cy.get('.search-card-title:last').should('have.css', 'height', `${height}px`)
        })
    })

    it('check if the items from searching list are all the same height for phones', () => {
        // searches for pl in input box
        cy.viewport("samsung-note9")
        cy.get('.search-input-editor').type("pl")
        cy.get('.search-card-title:first').then((element) => {
            // gets the height of the text in the first box, assuming no wrapping
            let height = element.height();
            // height of text in last box should be equal; if they are equal, then
            // their thumbnail cards will be of the same size
            cy.get('.search-card-title:last').should('have.css', 'height', `${height}px`)
        })
    })
    it('check if the items from searching list are all the same height for tablets', () => {
        // searches for pl in input box
        cy.viewport("ipad-mini")
        cy.get('.search-input-editor').type("pl")
        cy.get('.search-card-title:first').then((element) => {
            // gets the height of the text in the first box, assuming no wrapping
            let height = element.height();
            // height of text in last box should be equal; if they are equal, then
            // their thumbnail cards will be of the same size
            cy.get('.search-card-title:last').should('have.css', 'height', `${height}px`)
        })
    })
    it('check if the items from searching list are all the same height for medium laptops', () => {
        // searches for pl in input box
        cy.viewport("macbook-11")
        cy.get('.search-input-editor').type("pl")
        cy.get('.search-card-title:first').then((element) => {
            // gets the height of the text in the first box, assuming no wrapping
            let height = element.height();
            // height of text in last box should be equal; if they are equal, then
            // their thumbnail cards will be of the same size
            cy.get('.search-card-title:last').should('have.css', 'height', `${height}px`)
        })
    })
    it('check if the items from searching list are all the same height small phones', () => {
        // searches for pl in input box
        cy.viewport("iphone-8")
        cy.get('.search-input-editor').type("pl")
        cy.get('.search-card-title:first').then((element) => {
            // gets the height of the text in the first box, assuming no wrapping
            let height = element.height();
            // height of text in last box should be equal; if they are equal, then
            // their thumbnail cards will be of the same size
            cy.get('.search-card-title:last').should('have.css', 'height', `${height}px`)
        })
    })

})