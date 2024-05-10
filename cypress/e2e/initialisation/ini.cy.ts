describe('web-page initialisation', () => {
  beforeEach(() => {

    // opens up dev webpage 
    cy.visit('http://localhost:5173/')

  })

  it('displays title and footer title', () => {

    // main title and footer title are rendered and visible
    cy.get('.site-title').should('be.visible')
    cy.get('.footer-title').should('be.visible')

  })

  it('displays 20 movie cards', () => {

    // counts number of display cards are on the trending page; 
    // 20 results are expected
    cy.get('.page-card').should('have.length', 20)
    cy.get('.page-card').should('be.visible', 20)


  })
})