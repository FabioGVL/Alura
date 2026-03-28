import elem from '../../support/elements';
const massaDeDados = require ('faker-br');

describe('Teste de cadastro', () => {

    beforeEach(() => {
        cy.visit("/signup")
    
    });
    

    it('Teste Válido 1 - Cadastro bem sucedido', () => {

        var nomeUsuario = (massaDeDados.internet.userName().toLowerCase())
        var userName = nomeUsuario.replace(/[^a-zA-Z0-9]/g, '');

        cy.preencherCadastro(Cypress.env('emailUsuario'), Cypress.env('nomeUsuario'), userName, Cypress.env('senhaUsuario'));
        cy.wait(2000),
        cy.get(elem.botaoRegistrar).click();
        cy.wait(2000),
        cy.fazerLogin(userName, Cypress.env('senhaUsuario'));
        cy.get(elem.botaoLogin).click();

        cy.get('a.mr-1').should('have.text', userName)
        
    });


    it('Teste Válido 2 - Campo E-mail com letras maiúsculas', () => {

        var nomeUsuario = (massaDeDados.internet.userName().toLowerCase())
        var userName = nomeUsuario.replace(/[^a-zA-Z0-9]/g, '');

        cy.preencherCadastro(Cypress.env('emailMaiusculo'), Cypress.env('nomeUsuario'), userName, Cypress.env('senhaUsuario'));
        cy.wait(2000),
        cy.get(elem.botaoRegistrar).click();
        cy.wait(2000),
        cy.fazerLogin(userName, Cypress.env('senhaUsuario'));
        cy.get(elem.botaoLogin).click();

        cy.get('a.mr-1').should('have.text', userName)

    });


    it('Teste Válido 3 - Permitir campo Full Name com números', () => {

        var nomeUsuario = (massaDeDados.internet.userName().toLowerCase())
        var userName = nomeUsuario.replace(/[^a-zA-Z0-9]/g, '');

        cy.preencherCadastro(Cypress.env('emailUsuario'), massaDeDados.random.number(), userName, Cypress.env('senhaUsuario'));
        cy.wait(2000),
        cy.get(elem.botaoRegistrar).click();
        cy.wait(2000),
        cy.fazerLogin(userName, Cypress.env('senhaUsuario'));
        cy.get(elem.botaoLogin).click();

        cy.get('a.mr-1').should('have.text', userName)
        
    });


    it('Teste Válido 4 - Permitir campo Full Name com números e letras', () => {

        var nomeUsuario = (massaDeDados.internet.userName().toLowerCase())
        var userName = nomeUsuario.replace(/[^a-zA-Z0-9]/g, '');

        cy.preencherCadastro(Cypress.env('emailUsuario'), 'Nome0123', userName, Cypress.env('senhaUsuario'));
        cy.wait(2000),
        cy.get(elem.botaoRegistrar).click();
        cy.wait(2000),
        cy.fazerLogin(userName, Cypress.env('senhaUsuario'));
        cy.get(elem.botaoLogin).click();

        cy.get('a.mr-1').should('have.text', userName)
        
    });


    it('Teste Válido 5 - Permitir campo Full Name apenas com caracteres especiais', () => {

        var nomeUsuario = (massaDeDados.internet.userName().toLowerCase())
        var userName = nomeUsuario.replace(/[^a-zA-Z0-9]/g, '');

        cy.preencherCadastro(Cypress.env('emailUsuario'), '#!@$%!@#@', userName, Cypress.env('senhaUsuario'));
        cy.wait(2000),
        cy.get(elem.botaoRegistrar).click();
        cy.wait(2000),
        cy.fazerLogin(userName, Cypress.env('senhaUsuario'));
        cy.get(elem.botaoLogin).click();

        cy.get('a.mr-1').should('have.text', userName)
        
    });


    it('Teste Válido 6 - Campo Password apenas com letras maiusculas', () => {

        var nomeUsuario = (massaDeDados.internet.userName().toLowerCase())
        var userName = nomeUsuario.replace(/[^a-zA-Z0-9]/g, '');

        cy.preencherCadastro(Cypress.env('emailUsuario'), Cypress.env('nomeUsuario'), userName, 'TESTEEEE');
        cy.wait(2000),
        cy.get(elem.botaoRegistrar).click();
        cy.wait(2000),
        cy.fazerLogin(userName, 'TESTEEEE');
        cy.get(elem.botaoLogin).click();

        cy.get('a.mr-1').should('have.text', userName)
        
    });


    it('Teste Válido 7 - Campo Password com caracteres especiais', () => {

        var nomeUsuario = (massaDeDados.internet.userName().toLowerCase())
        var userName = nomeUsuario.replace(/[^a-zA-Z0-9]/g, '');

        cy.preencherCadastro(Cypress.env('emailUsuario'), Cypress.env('nomeUsuario'), userName, 't&ste@teste!');
        cy.wait(2000),
        cy.get(elem.botaoRegistrar).click();
        cy.wait(2000),
        cy.fazerLogin(userName,'t&ste@teste!'),
        cy.get(elem.botaoLogin).click();

        cy.get('a.mr-1').should('have.text', userName)
        
    });


    it('Teste Inválido 8 - Campo E-mail com caracteres especiais extras', () => {

        var nomeUsuario = (massaDeDados.internet.userName().toLowerCase())
        var userName = nomeUsuario.replace(/[^a-zA-Z0-9]/g, '');

        cy.preencherCadastro(Cypress.env('emailCaractereDuplo'), Cypress.env('nomeUsuario'), userName, Cypress.env('senhaUsuario'));
        cy.wait(2000),
        cy.get(elem.botaoRegistrar).click();

        cy.contains('.text-danger', 'Invalid e-mail')

    });


    it('Teste Inválido 9 - Campo E-mail com espaço adicional', () => {

        var nomeUsuario = (massaDeDados.internet.userName().toLowerCase())
        var userName = nomeUsuario.replace(/[^a-zA-Z0-9]/g, '');

        cy.preencherCadastro(Cypress.env('emailComEspaço'), Cypress.env('nomeUsuario'), userName, Cypress.env('senhaUsuario'));
        cy.wait(2000),
        cy.get(elem.botaoRegistrar).click();

        cy.contains('.text-danger', 'Invalid e-mail')
        
    });


    it('Teste Inválido 10 - Campo E-mail com ausência do @', () => {

        var nomeUsuario = (massaDeDados.internet.userName().toLowerCase())
        var userName = nomeUsuario.replace(/[^a-zA-Z0-9]/g, '');

        cy.preencherCadastro(Cypress.env('emailSemArroba'), Cypress.env('nomeUsuario'), userName, Cypress.env('senhaUsuario'));
        cy.wait(2000),
        cy.get(elem.botaoRegistrar).click();

        cy.contains('.text-danger', 'Invalid e-mail')
        
    });

    it('Teste Inválido 11 - Campo E-mail com ausência do .com', () => {

        var nomeUsuario = (massaDeDados.internet.userName().toLowerCase())
        var userName = nomeUsuario.replace(/[^a-zA-Z0-9]/g, '');

        cy.preencherCadastro(Cypress.env('emailSem.Com'), Cypress.env('nomeUsuario'), userName, Cypress.env('senhaUsuario'));
        cy.wait(2000),
        cy.get(elem.botaoRegistrar).click();

        cy.contains('.text-danger', 'Invalid e-mail')
        
    });


    it('Teste Inválido 12 - Campo User Name com espaços', () => {      
        
        cy.preencherCadastro(Cypress.env('emailUsuario'), Cypress.env('nomeUsuario'), 'teste teste', Cypress.env('senhaUsuario'));
        cy.wait(2000),
        cy.get(elem.botaoRegistrar).click();

        cy.contains('.text-danger', 'Must be lower case')     
        
    });


    it('Teste Inválido 13 - Campo User Name com caracteres especiais (exceto _ e -)', () => {      
        
        cy.preencherCadastro(Cypress.env('emailUsuario'), Cypress.env('nomeUsuario'), 'tes,te@teste#!', Cypress.env('senhaUsuario'));
        cy.wait(2000),
        cy.get(elem.botaoRegistrar).click();

        cy.contains('.text-danger', 'Must be lower case')       
        
    });


    it('Teste Inválido 14 - Campo User Name com mínimo de caracteres', () => {

        cy.preencherCadastro(Cypress.env('emailUsuario'), Cypress.env('nomeUsuario'), 'a', Cypress.env('senhaUsuario'));
        cy.wait(2000),
        cy.get(elem.botaoRegistrar).click();

        cy.contains('.text-danger', 'Mininum length is 2')
                
    });


    it('Teste Inválido 15 - Campo User Name com máximo de caracteres', () => {

        cy.preencherCadastro(Cypress.env('emailUsuario'), Cypress.env('nomeUsuario'), 'testetestetestetestetestetesteteste', Cypress.env('senhaUsuario'));
        cy.wait(2000),
        cy.get(elem.botaoRegistrar).click();

        cy.contains('.text-danger', 'Maximun length is 30')
                
    });


    it('Teste Inválido 16 - Campo User Name com acentos', () => {

        cy.preencherCadastro(Cypress.env('emailUsuario'), Cypress.env('nomeUsuario'), 'téstê', Cypress.env('senhaUsuario'));
        cy.wait(2000),
        cy.get(elem.botaoRegistrar).click();

        cy.contains('.text-danger', 'Must be lower case')  
                
    });


    it('Teste Inválido 17 - Campo Password mínimo de caracteres', () => {

        var nomeUsuario = (massaDeDados.internet.userName().toLowerCase())
        var userName = nomeUsuario.replace(/[^a-zA-Z0-9]/g, '');
        
        cy.preencherCadastro(Cypress.env('emailUsuario'), Cypress.env('nomeUsuario'), userName, 'teste');
        cy.get(elem.campoUserNameCadastro).type(userName),
        cy.wait(2000),
        cy.get(elem.botaoRegistrar).click();

        cy.contains('.text-danger', 'Mininum length is 8')  
        
    });


    it('Teste Inválido 18 - Campo Password máximo de caracteres', () => {

        var nomeUsuario = (massaDeDados.internet.userName().toLowerCase())
        var userName = nomeUsuario.replace(/[^a-zA-Z0-9]/g, '');

        cy.preencherCadastro(Cypress.env('emailUsuario'), Cypress.env('nomeUsuario'), userName, 'testetestetesteteste');
        cy.get(elem.campoUserNameCadastro).type(userName),
        cy.wait(2000),
        cy.get(elem.botaoRegistrar).click();

        cy.contains('.text-danger','Maximun length is 18')
        
    });

});