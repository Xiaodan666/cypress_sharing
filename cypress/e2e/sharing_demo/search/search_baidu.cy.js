describe("baidu demo test", () => {
  
  beforeEach(() => {
    cy.visit('https://www.baidu.com')
  })
  it("input epam and click seach", () => {
    cy.get('#kw').type("epam")
    cy.get('#su').click()
    cy.contains('epam是什么公司?')
  })
  it("input suzhou and click seach", () => {
    cy.get('#kw').type("suzhou")
    cy.get('#su').click()
    cy.contains('苏州市人民政府')
  }) 
  it("input china and click seach", () => {
    cy.get('#kw').type("china")
    cy.get('#su').click()
    cy.contains('中华人民共和国')
  })  
});