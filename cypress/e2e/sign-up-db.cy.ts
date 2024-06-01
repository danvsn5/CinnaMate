import db from "../../firebase.config"
import { doc, deleteDoc } from "firebase/firestore";


describe('full db test on desktop', () => {
    beforeEach(() => {

        // opens up build webpage 
        cy.visit('http://localhost:4173/')

        cy.viewport("macbook-16")

    })

    it('Full db test on desktop', () => {

        deleteDoc(doc(db, "users", "danvsnTEST"));

        // clicks the sign up button; modal should appear
        cy.get('.sign-up-button').click()

        // types username to sign up
        cy.get('.sign-up-user').type("danvsnTEST")

        // types password to sign up 
        cy.get('.sign-up-password').type("TEST")

        // submits
        cy.get('.submit').click()

        // implies that the user has signed up successfully
        cy.contains('You have signed up successfully!')

        // clicks off the modal overlay by waiting for any animations to occur and then
        // clicking off the modal in order to close it

        cy.wait(1000)
        cy.get('.ReactModal__Overlay:last').click('topLeft')

        cy.get('.fav-button:first .icon').should('have.css', 'color', 'rgb(255, 255, 255)')

        // clicks on all of the buttons of the first movie
        cy.get('.fav-button:first .icon').click()

        cy.get('.watched-button:first .icon').click()

        cy.get('.watchlist-button:first .icon').click()

        cy.get('.fav-button:first .icon').should('have.css', 'color', 'rgb(90, 0, 154)')
        cy.get('.watched-button:first .icon').should('have.css', 'color', 'rgb(90, 0, 154)')
        cy.get('.watchlist-button:first .icon').should('have.css', 'color', 'rgb(90, 0, 154)')

        /* —————————————————————————————— Add sequence of items to database ————————————————————————————— */

        cy.get('.fav-button .icon').eq(2).click()
        cy.get('.fav-button .icon').eq(2).should('have.css', 'color', 'rgb(90, 0, 154)')

        cy.get('.fav-button .icon').eq(7).click()
        cy.get('.fav-button .icon').eq(7).should('have.css', 'color', 'rgb(90, 0, 154)')
        cy.get('.watched-button .icon').eq(7).click()
        cy.get('.watched-button .icon').eq(7).should('have.css', 'color', 'rgb(90, 0, 154)')

        cy.get('.watchlist-button .icon').eq(18).click()
        cy.get('.watchlist-button .icon').eq(18).should('have.css', 'color', 'rgb(90, 0, 154)')
        cy.get('.watchlist-button .icon').eq(18).click()
        cy.get('.watchlist-button .icon').eq(18).should('have.css', 'color', 'rgb(255, 255, 255)')

        // signs out after adding items to database 
        cy.get('.sign-up-button').click()
        cy.get('.submit').click()

        // signs back into the database

        // clicks the sign up button; modal should appear
        cy.get('.sign-up-button').click()

        // types username to sign up
        cy.get('.sign-up-user').type("danvsnTEST")

        // types password to sign up 
        cy.get('.sign-up-password').type("TEST")

        // submits
        cy.get('.submit').click()

        // implies that the user has signed up successfully
        cy.contains('You have logged in successfully!')

        cy.wait(1000)
        cy.get('.ReactModal__Overlay:last').click('topLeft')

        // checks if items are the correct color based on whether or not they're in the database

        cy.get('.fav-button:first .icon').should('have.css', 'color', 'rgb(90, 0, 154)')
        cy.get('.watched-button:first .icon').should('have.css', 'color', 'rgb(90, 0, 154)')
        cy.get('.watchlist-button:first .icon').should('have.css', 'color', 'rgb(90, 0, 154)')

        cy.get('.fav-button .icon').eq(2).should('have.css', 'color', 'rgb(90, 0, 154)')

        cy.get('.fav-button .icon').eq(7).should('have.css', 'color', 'rgb(90, 0, 154)')
        cy.get('.watched-button .icon').eq(7).should('have.css', 'color', 'rgb(90, 0, 154)')

        cy.get('.watchlist-button .icon').eq(18).should('have.css', 'color', 'rgb(255, 255, 255)')


        deleteDoc(doc(db, "users", "danvsnTEST"));


    })
})