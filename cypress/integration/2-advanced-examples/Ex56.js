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
    var options = [];
    cy.get('[data-test="product_sort_container"] > option').each(
      (elem) => {
        options.push({value: elem.get('value'), option: elem.text()})
    }
    )
    cy.writeFile('D:/Projects/Personal/CypressAuto/cypress/fixtures/cuongld-data.json', 
    options
    )
    
  })

  it('Read writed file', function() {
    cy.login(this.testdata.username,this.testdata.password)
    cy.get('.product_sort_container > option').each(function (opt,index) {
      expect(opt).to.contain(this.data[index].option)

    }) 
  
  })
})
