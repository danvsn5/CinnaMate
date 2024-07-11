import { deleteDoc, doc } from "firebase/firestore";
import db from "../../firebase.config";

describe('CRUD opertations on individual movie tags', () => {
    beforeEach(() => {

        // opens up dev webpage 
        cy.visit('http://localhost:8080/browser')

    })

    it.skip('CRUD operations on individual movie tags', () => {

        // set window size to large desktop 
        cy.viewport("macbook-16")

        deleteDoc(doc(db, "users", "danvsnTEST"));

        // clicks the sign up button; modal should appear
        cy.get('.sign-up-button').click()

        // types username to sign up
        cy.get('.sign-up-user').type("danvsnTEST")

        // types password to sign up 
        cy.get('.sign-up-password').type("TEST")

        // submits
        cy.get('.submit').click()

        // clicks off the modal overlay by waiting for any animations to occur and then
        // clicking off the modal in order to close it

        cy.wait(2000)

        cy.get('.ReactModal__Overlay:last').click('topLeft')

        // checks if the seen button on the first movie is white: not currently inside the database
        cy.get('.watched-button:first .icon').should('have.css', 'color', 'rgb(255, 255, 255)')

        // clicks on the movie card to open up the movie page
        cy.get('.actual-thumb:first').click()

        // clicks on the create-tag text area and inputs a title for the tag
        cy.get('.tag-title').type("test-tag-title")

        // clicks on the tag-content text area and inputs a description for the tag
        cy.get('.tag-content').type("test-tag-content")

        // clicks on the create tag button labelled '.edit-tag-button'
        cy.get('.edit-tag-button').click()

        cy.wait(2000)

        // checks to see if the watched button is now purple
        cy.get('.exp-watched-button .icon').should('have.css', 'color', 'rgb(90, 0, 154)')

        cy.get('.existing-title').should('have.text', 'test-tag-title')

        cy.get('.existing-content').should('have.text', 'test-tag-content')

        // navigates to the my-movies page, opens up the seen tab, and clicks on the first
        // movie card to open the movie page, which should be the same movie as the initial click

        cy.get('.tab-button-links .tab-button:nth-child(3)').click()

        cy.get('.tabs-list .tab-list-item:nth-child(2)').click()

        // wait for '.actual-thumb' element to appear then click

        cy.get('.actual-thumb').should('be.visible', { timeout: 20000 });

        cy.get('.actual-thumb').click()

        // checks if database has updated properly and that the movie has been added to seen

        cy.get('.existing-title').should('have.text', 'test-tag-title')

        cy.get('.existing-content').should('have.text', 'test-tag-content')

        cy.get('.exp-watched-button .icon').should('have.css', 'color', 'rgb(90, 0, 154)')

        // opens the tag editor for the created tag
        cy.get('.existing-tag li').click()

        cy.wait(1000)

        // edits the new tag and sends update to the database
        cy.get('.tag-editor .tag-title').clear().type("new-testing-tag-title")

        cy.get('.tag-editor .tag-content').clear().type("new-testing-tag-content")

        cy.get('.tag-edit-button-wrapper button:last-child').click()

        cy.wait(1000)

        // checks if the content has updated properly inside the element
        cy.get('.existing-title').should('have.text', 'new-testing-tag-title')

        cy.get('.existing-content').should('have.text', 'new-testing-tag-content')

        // returns to my movies page 
        cy.get('.exp-return-button').click()

        cy.get('.tabs-list .tab-list-item:nth-child(2)').click()

        // wait for '.actual-thumb' element to appear then click
        cy.get('.actual-thumb').should('be.visible', { timeout: 20000 });

        cy.get('.actual-thumb').click()

        // checks if the content has updated properly inside the element with database implementation
        cy.get('.existing-title').should('have.text', 'new-testing-tag-title')

        cy.get('.existing-content').should('have.text', 'new-testing-tag-content')

        // deletes tag and checks it is no longer visible in the DOM
        cy.get('.existing-tag li').click()

        cy.wait(1000)

        cy.get('.tag-edit-button-wrapper button:first-child').click()

        cy.wait(1000)

        cy.get('.existing-tag').should('not.exist')

        deleteDoc(doc(db, "users", "danvsnTEST"));

    })
})