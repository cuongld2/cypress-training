describe("Test suite", function () {
  it("Handling tables", function () {
    cy.visit("https://chercher.tech/practice/table");
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    //selects the total number of rows
    cy.get("tr");
    //selects the column elements
    cy.get("td"); // [OR] cy.get("tr td");
    //iterating through the array of elements
    cy.get("td:nth-child(2)").each(($e1, index, $list) => {
      // cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {  this can also be used because "td" or "tr td" gives the same output
      //storing the content in the text variable
      const text = $e1.text();
      //If the content is Google,iteration stops
      if (text.includes("Facebook")) {
        //gets the CSS of the second column
        cy.get("td:nth-child(2)")
          //grabs the content in the index value
          .eq(index)
          // promises should be resolved manually since text() is jQuery method
          .then(function (Field) {
            const Fieldtext = Field.text();
            //comparing strings using the jQuery method expect()
            expect(Fieldtext).to.equal("Facebook");
          });
      }
    });
  });
});