/// <reference types="cypress"/>

describe('Tessting', () => {
  beforeEach(() => {
    cy.fixture('testdata1').then(function (testdata1) {
      this.testdata1 = testdata1
      cy.log(this.testdata1)
    })
    cy.visit('http://www.demo.guru99.com/V4/index.php')  
  })

  it('Verify Login fail with blank userID and blank password', function () {
    //blank username and blank password
    cy.get('[type="submit"]').click()
  })

  it('Verify Login fail with invalid userID and valid password', function () {
    cy.login1(this.testdata[1].username,this.testdata[1].password)
  })

  it('Verify Login fail with valid userID and invalid password', function () {
    cy.login1(this.testdata[2].username,this.testdata[2].password)
  })

  it('Verify Login fail with invalid userID and invalid password', function () {
    cy.login(this.testdata[3].username,this.testdata[3].password)
  })

  it('Verify Login success with valid userID and valid password', function () {
    cy.login1(this.testdata1[0].username,this.testdata1[0].password)
    cy.title().should('eq','Guru99 Bank Manager HomePage')
  })


})


