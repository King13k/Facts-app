/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('ALL FACTS', () => {
  beforeEach(() => {
    cy.intercept('GET', "https:numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true", {
      fixture:"dateFact"
    });

    cy.intercept('GET', "https:numbersapi.p.rapidapi.com/1492/year?fragment=true&json=true", {
      fixture:"yearFact"
    });

    cy.intercept('GET', "https:numbersapi.p.rapidapi.com/random/trivia?min=10&max=20&fragment=true&json=true", {
      fixture:"triviaFact"
    });

    cy.visit('http://localhost:3000/')
  })

  it('displays mainpage by default', () => {
    cy.get('.header-container')
    cy.wait(2000)
    cy.contains('ALL FACTS!')
    cy.get('.fact-container').should('have.length', 1)
    cy.get('.fact-type').first().should('have.text', 'date')
    cy.get('.fact-type').last().should('have.text', 'trivia')
  })

  it('should be able to click answer button', () => {
    cy.get('.btn').first().click()
    cy.url("http://localhost:3000/answer/date")
    cy.get('.home-btn').click()
  })

  it('should be able to navigate back home', () => {
    cy.get('.btn').last().click()
    cy.url("http://localhost:3000/answer/trivia")
    cy.get('.home-btn').click()
    cy.url("http://localhost:3000/")
  })

  it.only('should be able to view favotite facts', () => {
    cy.get('.add-fav').first().click()
    cy.wait(2000)
    cy.get('.viewFavs-btn').click()
    cy.wait(5000)
    cy.get('.home-btn').click()
  })
})
