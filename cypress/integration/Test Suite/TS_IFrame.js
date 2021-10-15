/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Word with iframe tab', () => {
  beforeEach(() => {
    
    cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame')
    cy.get('form[class="search"]').within(($form) => {
      cy.get('#s').type('Selenium',{force: true})
      cy.get('.button_search').click({force: true})
    })

     
  })

  it('check selenium keyword in home search', function () {
    //check selenium keyword in home search
    cy.get('h1').contains('Selenium').should('be.visible')

  })

  it('check selenium keyword in each result', function () {
  cy.get(':nth-child(1) > .post_item > :nth-child(3) > .more-link').click()
  cy.get('.content_bgr').contains('Selenium').should('exist')
  })

  it('check selenium keyword in each result', function () {
  cy.get(':nth-child(2) > .post_item > :nth-child(3) > .more-link').click()
  cy.get('.content_bgr').contains('Selenium').should('exist')
  })

  it('check selenium keyword in each result', function () {
  cy.get(':nth-child(3) > .post_item > :nth-child(3) > .more-link').click()
  cy.get('.content_bgr').contains('Selenium').should('exist')
  })

  it('check selenium keyword in each result', function () {
  cy.get(':nth-child(4) > .post_item > :nth-child(3) > .more-link').click()
  cy.get('.content_bgr').contains('Selenium').should('exist')
  })

  it('check selenium keyword in each result', function () {
  cy.get(':nth-child(5) > .post_item > :nth-child(3) > .more-link').click()
  cy.get('.content_bgr').contains('Selenium').should('exist')
  })

  it('check selenium keyword in each result', function () {
  cy.get(':nth-child(6) > .post_item > :nth-child(3) > .more-link').click()
  cy.get('.content_bgr').contains('Selenium').should('exist')
  })

  it('check selenium keyword in each result', function () {
  cy.get(':nth-child(7) > .post_item > :nth-child(3) > .more-link').click()
  cy.get('.content_bgr').contains('Selenium').should('exist')
  })

})