import elem from "../support/elements";


Cypress.Commands.add('preencherCadastro', (email, nome, userName, senha) => { 
 
  cy.get(elem.campoEmailCadastro).type(email);
  cy.get(elem.campoNomeUsuarioCadastro).type(nome);
  cy.get(elem.campoUserNameCadastro).type(userName)
  cy.get(elem.campoSenhaCadastro).type(senha);})

  Cypress.Commands.add('fazerLogin', (userName, senha) => {
    cy.get(elem.campoUserNameLogin).type(userName);
    cy.get(elem.campoSenhaLogin).type(senha);
    cy.get(elem.botaoLogin).click();})