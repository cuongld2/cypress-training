/// <reference types="cypress"/>

describe('Testing', () => {

  beforeEach(() => {
    cy.visit('http://www.demo.guru99.com/test/')
    cy.fixture('date').then(function (date) {
      this.date = date
      //cy.log(this.date)
    })

  })  

  // it('Verify that user should able to select date (and datetime field should display correct value', function () {
  //       //input time and verify
  //       cy.get('[type="datetime-local"]').click()
  //         .type(this.date.date+'T'+this.date.time)
  //       cy.get('[type="submit"]').click()
  //       cy.get('[style="font-size:15px;margin-left:50px;"]')
  //       .should('have.text','Your Birth Date is '+this.date.date+'Your Birth Time is '+this.date.time)

      
  // })

  it('Verify the date should be in range', function () {
    //input time in range and verify
    // cy.get('[type="datetime-local"]').click()
    cy.Date()
 
})

  

})