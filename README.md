# Escopo do Projeto
Este documento detalha a estratégia de automação de testes para a plataforma **Alura**. O foco principal é a validação do fluxo de **Cadastro de Usuários**, cobrindo desde o "caminho feliz" com geração de massa dinâmica até validações rigorosas de campos (Regex, limites de caracteres e mensagens de erro do sistema).

## ESCOPO DO TESTE

### 1. Mapeamento de Features:
* **Fluxo de Login:** Acesso restrito à plataforma de cursos.
* **Interface de Dashboard:** Visualização de trilhas e progresso de aprendizado.

### 2. Features Testadas:
* **Autenticação Básica:** Validação de login com sucesso e mensagens de erro para credenciais incorretas.
* **Navegação Inicial:** Verificação de carregamento de elementos críticos da página pós-login.

### 3. Massa de Dados para Teste:
* **Cenários de Teste:** Uso de dados estáticos para validação de campos obrigatórios e comportamentos de interface.

### 4. Tipos de Testes Utilizados:
* **Testes de Funcionalidade:** Verificar se as funcionalidades básicas do sistema estão operando conforme o esperado.
* **Testes de Usabilidade:** Avaliar a facilidade de navegação e clareza das instruções em tela.
* **Testes de Integração:** Garantir que as partes do sistema (Login e Home) se conectem sem erros.

## Arquitetura e estrutura
O projeto foi desenhado para ser resiliente e de fácil manutenção, utilizando as melhores práticas QA:

* Abstração dos fluxos de `preencherCadastro()` e `fazerLogin()` em `cypress/support/commands.js`, permitindo a reutilização de código em diferentes suítes.
* Implementação de lógica de tratamento de strings para converter dados randômicos em formatos aceitos pelo sistema (ex: usernames em lowercase e sem caracteres especiais).
* Uso de asserções negativas para validar mensagens de erro dinâmicas (ex: *Invalid e-mail*, *Mininum length is 8*).
* Uso de `Cypress.env` para gerenciamento de credenciais e parâmetros de teste. 
Por questões de segurança, apenas o arquivo env.example é disponibilizado no repositório, demonstrando a estrutura necessária, sem expor dados reais.

## Tecnologias e ambientes utilizados para execução do projeto:
- Cypress v10.11.0
- Node JS v20.15.0
- Google Chrome v126.0.6478.126
- Windows 11 v23H2
- Biblioteca de massa de dados: [Faker-br](https://www.npmjs.com/package/faker-br)
- GIT

## Passos para reproduzir o teste

### 1. Efetuando o download e descompactando o projeto
- No GitHub, clique em "code".
- Clique em "Download Zip" para fazer o download do arquivo deste teste.
- No seu computador, localize o download efetuado.
- Descompacte o arquivo.

### 1.2 Configurando o projeto no VSCode e executando o teste
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

