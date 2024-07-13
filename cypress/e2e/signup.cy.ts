import db from "../../firebase.config"
import { doc, deleteDoc } from "firebase/firestore";


describe('sign up with desktop variation', () => {
    beforeEach(() => {

        // opens up build webpage 
        cy.visit('http://localhost:8080/')

        cy.viewport("macbook-16")

    })

    it('Create account, logs in, logs out, deletes account', () => {

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
    })
})