/// <reference types="cypress" />

describe('check login', () => {
    // Connecter avec le bon email et le bon mot de passe
    it('login with correct email and password', () => {
        cy.visit('/')
        cy.get ('.header-main-section')
        cy.contains('Sign In').click()

        cy.contains('.right-container').as('loginForm')
        cy.get('@loginForm').find('[placeholder="* Password"]').type('1qaz@WSX13')
        cy.contains('button', 'Log In').click()
        cy.get('.header-main-section')
            .should('contain', 'helen_semashko')
    })
    
    //Connecter avec le bon email et un mot de passe incorrect
    it('login with correct email and incorrect password', () => {
        cy.visit('/')
        cy.get ('.header-main-section')
        cy.contains('Sign In').click()

        cy.contains('.right-container', 'Returning Members?').as('loginForm')
        cy.get('@loginForm').find('[placeholder="* Email"]').type('helen_semashko@mail.ru')
        cy.get('@loginForm').find('[placeholder="* Password"]').type('1qaz@WSX')
        cy.contains('button', 'Log In').click()
        cy.get('.signup-error-box')
            .should('contain', 'ALERT:')
    })
    //Connecter avec un email incorrect et le bon mot de passe
    it('login with incorrect email and correct password', () => {
        cy.visit('/')
        cy.get ('.header-main-section')
        cy.contains('Sign In').click()

        cy.contains('.right-container', 'Returning Members?').as('loginForm')
        cy.get('@loginForm').find('[placeholder="* Email"]').type('helen_semashko@mail.ru')
        cy.get('@loginForm').find('[placeholder="* Password"]').type('1qaz@WSX')
        cy.contains('button', 'Log In').click()
        cy.get('.signup-error-box')
            .should('contain', 'ALERT:')
    })
    
})
