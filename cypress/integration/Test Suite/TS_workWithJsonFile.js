/// <reference types="cypress"/>
import * as _ from 'lodash';

describe('Testing', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.fixture('testdata').then(function (testdata) {
      this.testdata = testdata
      cy.log(this.testdata)
    })
    
    cy.fixture('data').then(function (data) {
      this.data = data
      cy.log(this.data)
    })
    
    
  })

  it('Verify that user should able to select value in list ', function() {
    cy.login(this.testdata.username,this.testdata.password)
    cy.get('select').select('Price (low to high)')
  })

  it('Write list of option into json file', function() {
    cy.login(this.testdata.username,this.testdata.password)
    cy.writeFile('C:/Users/Mark Hi/CypressAuto/cypress/fixtures/data.json', 
    [
      { value:'za',
        option:'Name (A to Z)'
      },

      {
        value:'za',
        option:'Name (Z to A)'
      },

      {
        value:'lohi',
        option:'Price (low to high)'
      },

      {
        value:'hilo',
        option:'Price (high to low)'
      },

    ]
    )
    
  })

  it('Read writed file', function() {
    cy.login(this.testdata.username,this.testdata.password)
    cy.get('.product_sort_container > option').each(function (opt,index) {
      expect(opt).to.contain(this.data[index].option)

    }) 
  
  })
})
