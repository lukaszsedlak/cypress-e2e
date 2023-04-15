import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import NavigationTabComponent from '../page-components/navigation-tab-component';
import PayBillsTab from '../page-components/pay-bills-tab-component';
import PaySavedPayee from '../pages/pay-saved-payee-page';

const navigationTabComponent = new NavigationTabComponent();
const payBillsTab = new PayBillsTab();
const paySavedPayee = new PaySavedPayee();

Given('I log in to application', () =>{
    cy.visit('http://zero.webappsecurity.com/')
    cy.login('username', 'password');
});

Given(`I navigate to 'Pay Bills' Tab`, () => {
    navigationTabComponent.getPayBillsTab().click();
    payBillsTab.getActiveTab().should('have.text', 'Pay Saved Payee');
    cy.log('"Pay Saved Payee" tab is displayed.');
});

When(`I select {string} with {string}`, (payee, account) => {
    paySavedPayee.getPayeeSelect().select(payee);
    paySavedPayee.getAccountSelect().select(account);
});


When('I populate all fields', () => {
    
    paySavedPayee.getAmountInput().type('100');
    paySavedPayee.getDataInput().type('2023-03-08');
    paySavedPayee.getAmountInput().click(); // Workaround to remove focus from calendar after typing
    paySavedPayee.getDescriotionInput().type('Czesne');
    cy.log('All fields were populated with data.')
});

When(`Click 'Pay' button`, () => {
    paySavedPayee.getPayButton().click();
});

Then('Message: {string} is displayed', (text) => {
    paySavedPayee.getConfirmationMessage().should('have.text', text);
    cy.log('Payment was confirmred succesfully.');
})


