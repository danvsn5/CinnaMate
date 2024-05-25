import db from "../../src/components/utils/firebaseini"
import { doc, deleteDoc } from "firebase/firestore";


describe('sign up with desktop variation', () => {
    beforeEach(() => {

        // opens up build webpage 
        cy.visit('http://localhost:4173/')

        cy.viewport("macbook-16")

    })

    it('Sign in to existing account', () => {

        deleteDoc(doc(db, "users", "danvsnTEST"));

        // clicks the sign up button; modal should appear
        cy.get('.sign-up-button').click()

        // types username to sign up
        cy.get('.sign-up-user').type("danvsnTEST")

        // types password to sign up 
        cy.get('.sign-up-password').type("TEST")

        // submits
        cy.get('.submit').click()

        // should get alert
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Signed up successfully!`)
          })

        cy.get('.sign-up-button').click()

        // user should be logged out
        cy.get('.submit').click()

        cy.get('.sign-up-button').click()

        cy.get('.modal-title h1').contains('Sign Up or Log In')  

        deleteDoc(doc(db, "users", "danvsnTEST"));


    })
})