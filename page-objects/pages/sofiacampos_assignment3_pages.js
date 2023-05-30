export class NewAccount {
  
  url= 'http://localhost:3000/bankaccounts';

  elements= {
    getAccountsSection: () =>cy.get('[data-test="sidenav-bankaccounts"]'),
    getNewAccountBtn: () => cy.getBySel('bankaccount-new'),
    getNewBankAccountName:()=> cy.getBySel('bankaccount-bankName-input'),
    getNewBankRoutingNumber:()=>cy.getBySel('bankaccount-routingNumber-input'),
    getNewBankAccountNumber:()=>cy.getBySel('bankaccount-accountNumber-input'),
    getSubmitAccountBtn:()=>cy.getBySel('bankaccount-submit'),
    getBankAccountList:()=>cy.getBySel('bankaccount-list')
  }

  addNewBankAccount (name,routingNumber, accountNumber) {
    this.elements.getAccountsSection.click();
    this.elements.getNewAccountBtn.click();
    this.elements.getNewBankAccountName.clear().type(name);
    this.elements.getNewBankRoutingNumber.clear().type(routingNumber);
    this.elements.getNewBankAccountNumber.clear().type(accountNumber);
    this.elements.getSubmitAccountBtn.click();
    this.elements.getBankAccountList.should('contain', bankAccountInfo.name);
  }

  deleteBankaccount (name) {
    this.elements.getBankAccountList.get('li').find(`:contains(${name})`).find ('[data-test="bankaccount-delete"]').click();
    this.elements.getBankAccountList.should('contain', `${name} (Deleted)`);
  }
}


export const NewAccountPage = new NewAccount();