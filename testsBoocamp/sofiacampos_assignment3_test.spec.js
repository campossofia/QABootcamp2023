import {NewAccountPage} from "../page-objects/pages/sofiacampos_assignment3_pages";

describe('Real Word App Tests', () => {
  const userInfo={
    username: 'Katharina_Bernier',
    password:'s3cret'
  }

  const bankAccountInfo={
    name:'Test Account Sofia 1',
    routingNumber:'000000001',
    accountNumber: '000000002'
  }

  before(()=>{
    cy.visit('/')
    cy.login(userInfo.username, userInfo.password)    
  })

  afterEach(()=>{
    cy.getBySel("sidenav-signout").click()
  })
 
  it('Create and delete bank account', () => {
    NewAccountPage.addNewBankAccount(bankAccountInfo.name, bankAccountInfo.routingNumber, bankAccountInfo.accountNumber);
    NewAccountPage.deleteBankaccount(bankAccountInfo.name);
  })
})