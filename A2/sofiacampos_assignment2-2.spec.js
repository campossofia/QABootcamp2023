describe('Test made by Sofia Campos to test log in, create a bank account and log out on Cypress Realworld App', () => {
  const userInfo={
    username: 'Katharina_Bernier',
    password:'s3cret'
  }

  const bankAccountInfo={
    name:'Test Account Sofia 3',
    routingNumber:'000000001',
    accountNumber: '000000002'
  }

  it('passes', () => {
    cy.visit('http://localhost:3000/signin')
    cy.login(userInfo.username, userInfo.password)
    
    cy.getBySel('sidenav-bankaccounts').click()
    cy.getBySel('bankaccount-new').click()

    cy.getBySel('bankaccount-bankName-input').type(bankAccountInfo.name)
    cy.getBySel('bankaccount-routingNumber-input').type(bankAccountInfo.routingNumber)
    cy.getBySel('bankaccount-accountNumber-input').type(bankAccountInfo.accountNumber)

    cy.getBySel('bankaccount-submit').click()

    cy.get('[data-test="bankaccount-list"]').get('li').find(`:contains(${bankAccountInfo.name})`).find ('[data-test="bankaccount-delete"]').click()


    cy.getBySel("sidenav-signout").click()
    cy.location("pathname").should("eq", "/signin")

  })
})