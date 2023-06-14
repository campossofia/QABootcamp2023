
describe('Real Word App Tests', () => {
  const userInfo={
    username: 'Katharina_Bernier',
    password:'s3cret'
  }

  const bankAccountInfo={
    name:'Test Account Sofia',
    routingNumber:'000000001',
    accountNumber: '000000002'
  }

  const endpoint='http://localhost:3001/bankAccounts'

  const idsAccounts=[]

  beforeEach(()=>{
    cy.visit('/')
    cy.login(userInfo.username, userInfo.password)    
  })

  afterEach(()=>{
    cy.getBySel("sidenav-signout").click()
  })
 
  it('create accounts api', () => {

    for(let i=1;i<6;i++){
    cy.request({
      method: 'POST',
      url:endpoint,
      body:{
          bankName: bankAccountInfo.name+`${i}`,
          accountNumber: bankAccountInfo.accountNumber+`${i}`,
          routingNumber: bankAccountInfo.routingNumber+`${i}`
      }
    }).then((response) => {
        let idInfo=response.body.account.id;
        idsAccounts.push(idInfo);
    })
    }})

    it('delete accounts api',()=>{
        idsAccounts.forEach(idAccount => {
            cy.request({
                method:'DELETE',
                url:endpoint+`/${idAccount}`
            })
            
        });
    })
})