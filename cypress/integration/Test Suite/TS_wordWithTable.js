/// <reference types="cypress"/>

describe('Verify all assignee’s records should contain keyword', () => {
  beforeEach(() => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/WebTable/')
    cy.fixture('name').then(function (name) {
      this.name = name
    })  
  })


  it('Verify that user cant find other people name with blank field', function () {
    //can't find any result
    cy.get(':nth-child(1) > .input-sm').type(this.name[0].name)
    cy.get("tr")
    //selects the column elements
    cy.get("td") // [OR] cy.get("tr td");
    //iterating through the array of elements
    cy.get("td:nth-child(1)").each(($e1, index, $list) => {
      // cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {  this can also be used because "td" or "tr td" gives the same output
      //storing the content in the text variable
      const text = $e1.text()
      //If the content is Google,iteration stops
      if (text.includes(this.name[0].name)) {
        //gets the CSS of the second column
        cy.get("td:nth-child(1)")
          //grabs the content in the index value
          .eq(index)
          // promises should be resolved manually since text() is jQuery method
          .then(function (Field) {
            const Fieldtext = Field.text();
            //comparing strings using the jQuery method expect()
            expect(Fieldtext).to.equal(this.name[0].name);
          });
      }
    })
    
  })

  it('Verify that user cant find other people name with special character', function () {
    //for special character find all result 
    cy.get(':nth-child(1) > .input-sm').type(this.name[1].name)
    cy.get("tr")
    //selects the column elements
    cy.get("td") // [OR] cy.get("tr td");
    //iterating through the array of elements
    cy.get("td:nth-child(1)").each(($e1, index, $list) => {
      // cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {  this can also be used because "td" or "tr td" gives the same output
      //storing the content in the text variable
      const text = $e1.text()
      //If the content is Google,iteration stops
      if (text.includes(this.name[1].name)) {
        //gets the CSS of the second column
        cy.get("td:nth-child(1)")
          //grabs the content in the index value
          .eq(index)
          // promises should be resolved manually since text() is jQuery method
          .then(function (Field) {
            const Fieldtext = Field.text();
            //comparing strings using the jQuery method expect()
            expect(Fieldtext).to.equal(this.name[1].name);
          });
      }
    })
  })

  it('Verify that user cant find other people name by number', function () {
    //can't find any result
    cy.get(':nth-child(1) > .input-sm').type(this.name[2].name)
    cy.get("tr")
    //selects the column elements
    cy.get("td") // [OR] cy.get("tr td");
    //iterating through the array of elements
    cy.get("td:nth-child(1)").each(($e1, index, $list) => {
      // cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {  this can also be used because "td" or "tr td" gives the same output
      //storing the content in the text variable
      const text = $e1.text()
      //If the content is Google,iteration stops
      if (text.includes(this.name[2].name)) {
        //gets the CSS of the second column
        cy.get("td:nth-child(1)")
          //grabs the content in the index value
          .eq(index)
          // promises should be resolved manually since text() is jQuery method
          .then(function (Field) {
            const Fieldtext = Field.text();
            //comparing strings using the jQuery method expect()
            expect(Fieldtext).to.equal(this.name[2].name);
          });
      }
    })
  })

  it('Verify that user able to filter by Asignee another name', function () {
    //name = Mica
    cy.get(':nth-child(1) > .input-sm').type(this.name[3].name)
    cy.get("tr")
    //selects the column elements
    cy.get("td") // [OR] cy.get("tr td");
    //iterating through the array of elements
    cy.get("td:nth-child(1)").each(($e1, index, $list) => {
      // cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {  this can also be used because "td" or "tr td" gives the same output
      //storing the content in the text variable
      const text = $e1.text()
      //If the content is Google,iteration stops
      if (text.includes(this.name[3].name)) {
        //gets the CSS of the second column
        cy.get("td:nth-child(1)")
          //grabs the content in the index value
          .eq(index)
          // promises should be resolved manually since text() is jQuery method
          .then(function (Field) {
            const Fieldtext = Field.text();
            //comparing strings using the jQuery method expect()
            expect(Fieldtext).to.equal(this.name[3].name);
          });
      }
    })
  })

  it('Verify that user able to filter by Asignee', function () {
    //name = Pol
    cy.get(':nth-child(1) > .input-sm').type(this.name[4].name)
    cy.get("tr")
    //selects the column elements
    cy.get("td") // [OR] cy.get("tr td");
    //iterating through the array of elements
    cy.get("td:nth-child(1)").each(($e1, index, $list) => {
      // cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {  this can also be used because "td" or "tr td" gives the same output
      //storing the content in the text variable
      const text = $e1.text()
      //If the content is Google,iteration stops
      if (text.includes(this.name[4].name)) {
        //gets the CSS of the second column
        cy.get("td:nth-child(1)")
          //grabs the content in the index value
          .eq(index)
          // promises should be resolved manually since text() is jQuery method
          .then(function (Field) {
            const Fieldtext = Field.text();
            //comparing strings using the jQuery method expect()
            expect(Fieldtext).to.equal(this.name[4].name);
          });
      }
    })

  })


})