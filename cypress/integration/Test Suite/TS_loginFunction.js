/// <reference types="cypress"/>

describe('Testing Login functionality', () => {
  beforeEach(() => {
    cy.fixture('testdata1').then(function (testdata1) {
      this.testdata1 = testdata1
      cy.log(this.testdata1)
    })
    //call file data 
    cy.visit('http://www.demo.guru99.com/V4/index.php') // Navigate to the login page before do each testcase
  })

  it('Verify Login fail with blank userID and blank password', function () {
    //blank username and blank password
    cy.get('[type="submit"]').click()
  })

  it('Verify Login fail with invalid userID and valid password', function () {
    cy.login1(this.testdata1[1].username,this.testdata1[1].password)
    //using account second
  })

  it('Verify Login fail with valid userID and invalid password', function () {
    cy.login1(this.testdata1[2].username,this.testdata1[2].password)
    //using account third
  })

  it('Verify Login fail with invalid userID and invalid password', function () {
    cy.login1(this.testdata1[3].username,this.testdata1[3].password)
    //using account fourth
  })

  it('Verify Login success with valid userID and valid password', function () {
    cy.login1(this.testdata1[0].username,this.testdata1[0].password)
    cy.title().should('eq','Guru99 Bank Manager HomePage')
    ////using account first
  })


})


