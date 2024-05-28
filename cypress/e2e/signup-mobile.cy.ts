import db from "../../firebase.config"
import { doc, deleteDoc } from "firebase/firestore";


describe('sign up with desktop variation', () => {
    beforeEach(() => {

        // opens up build webpage 
        cy.visit('http://localhost:4173/')

        cy.viewport("samsung-note9")

    })

    it('Create account, logs in, logs out, deletes account', () => {

        deleteDoc(doc(db, "users", "danvsnTEST"));

        cy.get('.burger-button-A').click()
        // cy.get('.burger-button-B').click()

        // // clicks the sign up button; modal should appear
        // cy.get('#itm-btn-D').click()

        // // types username to sign up
        // cy.get('.sign-up-user').type("danvsnTEST")

        // // types password to sign up 
        // cy.get('.sign-up-password').type("TEST")

        // // submits
        // cy.get('.submit').click()

        // // should get alert
        // cy.on('window:alert', (str) => {
        //     expect(str).to.equal(`Signed up successfully!`)
        // })

    })
})