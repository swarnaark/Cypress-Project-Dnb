// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import FrontPage from "../Pageobjects/Mainpage";
import LoginPage from "../Pageobjects/LoginPage";

const frontpage = new FrontPage;
const loginpage = new LoginPage;
//
// -- This is a parent command --
 Cypress.Commands.add('cookiesUsage', () => {
    frontpage.CookieUsage();
   
   

  })
  Cypress.Commands.add('Login', () => {
    cy.fixture('Login.json').then((loginData) => {
    loginpage.LoginTODnb();
    loginpage.fillUsername(loginData.username);
    loginpage.fillPassword(loginData.password);
    loginpage.submission(loginData.Myname);
   


  })
})

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
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
  