/// <reference types="cypress" />
import NavigationTabComponent from '../page-components/navigation-tab-component';
import PayBillsTab from '../page-components/pay-bills-tab-component';
import AddNewPayeePage from '../pages/add-new-payee-page';
import PaySavedPayee from '../pages/pay-saved-payee-page';

describe('Pay bills tests', () => {

  beforeEach(() => {  
    cy.visit('http://zero.webappsecurity.com/')
    cy.login('username', 'password');
  })

  it('Pay Saved Payee', () => {
    const navigationTabComponent = new NavigationTabComponent();
    navigationTabComponent.getPayBillsTab().click();

    cy.get('.ui-tabs-selected > a').should('have.text', 'Pay Saved Payee'); //TODO 

    const paySavedPayee = new PaySavedPayee();
    paySavedPayee.getAmountInput().type('100');
    paySavedPayee.getDataInput().type('2023-03-08');

    // Workaround to remove focus from calendar after typing
    paySavedPayee.getAmountInput().click();

    paySavedPayee.getDescriotionInput().type('Czesne');
    paySavedPayee.getPayButton().click();
    paySavedPayee.getConfirmationMessage().should('have.text', 'The payment was successfully submitted.')
})

it('Adds new Payee', () => {
    const navigationTabComponent = new NavigationTabComponent();
    navigationTabComponent.getPayBillsTab().click();

    const payBillsTab = new PayBillsTab();
    payBillsTab.getAddNewPayeeTab().click();
    cy.get('.ui-tabs-selected > a').should('have.text', 'Add New Payee'); //TODO 

    const addNewPayee = new AddNewPayeePage();
    addNewPayee.getPayeeNameInput().type('John');
    addNewPayee.getPayeeAdressInput().type('23234 Boston, Main Aveniue 2');
    addNewPayee.getAccoutInput().type('1234 343343 4343434 343434');
    addNewPayee.getPayeeDetails().type('no data');
    addNewPayee.getAddButton().click();
    addNewPayee.getConfirmationMessage().should('have.text', 'The new payee John was successfully created.');
})
})