# PROJETO DE AUTOMAÇÃO: ALURA

## 1. OBJETIVO DO DOCUMENTO
Este documento detalha a estratégia de automação de testes para a plataforma **Alura**. O foco principal é a validação do fluxo de **Cadastro de Usuários**, cobrindo desde o "caminho feliz" com geração de massa dinâmica até validações rigorosas de campos (Regex, limites de caracteres e mensagens de erro do sistema).

## 2. TECNOLOGIAS UTILIZADAS
* **Framework:** [Cypress](https://www.cypress.io/)
* **Linguagem:** JavaScript / Node.js
* **Massa de Dados:** [Faker-br](https://www.npmjs.com/package/faker-br)
* **Arquitetura:** Page Objects (Elements Mapping) & Custom Commands
* **CI/CD:** GitHub Actions

## 3. ARQUITETURA E ESTRUTURA
O projeto foi desenhado para ser resiliente e de fácil manutenção, utilizando as melhores práticas QA:

* **Custom Commands:** Abstração dos fluxos de `preencherCadastro()` e `fazerLogin()` em `cypress/support/commands.js`, permitindo a reutilização de código em diferentes suítes.
* **Data Sanitization:** Implementação de lógica de tratamento de strings (Regex) para converter dados randômicos em formatos aceitos pelo sistema (ex: usernames em lowercase e sem caracteres especiais).
* **Validation Layer:** Uso de asserções negativas para validar mensagens de erro dinâmicas do Angular (ex: *Invalid e-mail*, *Mininum length is 8*).
* **Environment Variables:** Uso de `Cypress.env` para gerenciar credenciais e parâmetros de teste de forma segura.

## 4. COMO EXECUTAR O PROJETO

### **Pré-requisitos**
* Node.js instalado
* Clone do repositório: `git clone https://github.com/FabioGVL/Alura.git`

### **Instalação**
```bash
npm install
npx cypress run
