# Escopo do Projeto
Este documento detalha a estratégia de automação de testes para a plataforma **Alura**. O foco principal é a validação do fluxo de **Cadastro de Usuários**, cobrindo desde o "caminho feliz" com geração de massa dinâmica até validações rigorosas de campos (Regex, limites de caracteres e mensagens de erro do sistema).

## 1. ARQUITETURA E ESTRUTURA
O projeto foi desenhado para ser resiliente e de fácil manutenção, utilizando as melhores práticas QA:

* Abstração dos fluxos de `preencherCadastro()` e `fazerLogin()` em `cypress/support/commands.js`, permitindo a reutilização de código em diferentes suítes.
* Implementação de lógica de tratamento de strings para converter dados randômicos em formatos aceitos pelo sistema (ex: usernames em lowercase e sem caracteres especiais).
* Uso de asserções negativas para validar mensagens de erro dinâmicas (ex: *Invalid e-mail*, *Mininum length is 8*).
* Uso de `Cypress.env` para gerenciar credenciais e parâmetros de teste de forma segura.

## 2. Passos para reproduzir o teste

### 2.1 Efetuando o download e descompactando o projeto
- No GitHub, clique em "code".
- Clique em "Download Zip" para fazer o download do arquivo deste teste.
- No seu computador, localize o download efetuado.
- Descompacte o arquivo.

### 2.2 Configurando o projeto no VSCode e executando o teste
- Abra o VSCode.
- Clique em `Arquivo/File`.
- Clique em `Abrir pasta/Open folder`.
- Escolha a pasta do arquivo descompactado (`Alura-master`).
- Após o projeto ser aberto no VSCode, navegue até `Cypress > E2E`.
- Os testes estarão dentro das pastas `UI`.
- No terminal do Cypress digite `npx cypress open`. Caso necessário, instale o Cypress através do comando `npm install cypress`.
- Aguarde o Cypress abrir.
- Selecione a opção `E2E Testing`.
- Na próxima página selecione o navegador desejado.
- Na próxima página selecione o teste que deseja executar e a automação será executada.
- Também é possível executar o teste através do comando `npx cypress run`. O teste rodará dentro do próprio VSCode e serão gerados vídeos dos resultados dos testes. Os vídeos ficarão armazenados no destino `Cypress > Vídeos`.

## 3. Ferramentas e ambientes utilizados para execução do projeto:
- Cypress v10.11.0
- Node JS v20.15.0
- Google Chrome v126.0.6478.126
- Windows 11 v23H2
- Biblioteca de massa de dados: [Faker-br](https://www.npmjs.com/package/faker-br)
- GIT

