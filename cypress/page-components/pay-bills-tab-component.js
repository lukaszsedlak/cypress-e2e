class PayBillsTab {

    getAddNewPayeeTab(){
        return  cy.get('a').contains('Add New Payee');
    }

}
export default PayBillsTab;