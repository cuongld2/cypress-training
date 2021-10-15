// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

// import cypress = require("cypress")

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//function for Ex1
Cypress.Commands.add('login1', (username, password) =>{
  cy.get(':nth-child(1) > :nth-child(2) > input').type(username)
  cy.get(':nth-child(2) > :nth-child(2) > input').type(password)
  cy.get('[type="submit"]').click()

})

//function for number 4
Cypress.Commands.add( 'Date',(date) => {

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  function pad(number) { 
    //Add a leading 0 if the number is less than 10
    return ((number<10)?"0":"")+number.toString();
  }
  

  function randomTime() {
    //Generate random minute in the day (1440 minutes in 24h)
    var r = Math.floor(Math.random() * 1440);
  
    //The hour is obtained by dividing by the number of minutes in an hour
    //taking the floor of that (drop the decimal fraction)
    //take the remainder (modulo) of dividing by 12 (13 -> 1 etc)
    //add 1 so that the range is 1-12 rather than 0-11
    var HH = pad(1 + (Math.floor(r/60) % 12));
  
    //Take the integer remainder of dividing by 60 (remove the hours) 
    var MM = pad(r % 60);
  
    return HH + ":" + MM;
  }

  cy.visit('http://www.demo.guru99.com/test/')
  var moment = require('moment');
  const start = moment('2019-02-12')
  const end = moment('2020-02-12')
  var diff = end.diff(start,'days')
  cy.log("Different between end date and start date: ",diff)
  const new_diff= getRandomIntInclusive(0,diff)
  var day = moment(start + new_diff).format('YYYY-MM-DD');
  var time = randomTime()
  

  // const starttime =moment('08:30') 
  // const endtime = moment('10:30')
  // var difftime = end.diff(start,'minutes')
  // const new_difftime= getRandomIntInclusive(0,difftime)
  // var time = moment(starttime+new_difftime).format('hh:mm')
  // var time='01:57'
  // var start= '2019-02-12'
  // var end = '2020-02-12'
  // var diff =  end - start;
  // var new_diff = diff * Math.random();
  // var date = new Date(start + new_diff);
  cy.get('[type="datetime-local"]').click()
          .type(day+'T'+time)
          cy.get('[type="submit"]').click()
          cy.get('[style="font-size:15px;margin-left:50px;"]')
          .should('have.text','Your Birth Date is '+day+'Your Birth Time is '+time)
} )

//function for number 5&6
Cypress.Commands.add('login', (username, password) =>{
  cy.get('[data-test=username]').type(username)
  cy.get('[data-test=password]').type(password)
  cy.get('[data-test=login-button]').click()
  // cy.get('input[type=submit]').click('OK')
})

Cypress.Commands.add('array', (value, option) =>{
  var x = new Array(100)
  for (var i = 0; i < x.length; i++) {
    x[i] = new Array(3);
  }
  console.log(x);
  
})
