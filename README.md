[![Cypress Tests](https://github.com/FabioGVL/Alura-Cypress/actions/workflows/AluraAutomation.yml/badge.svg)](https://github.com/FabioGVL/Alura-Cypress/actions/workflows/AluraAutomation.yml)

# Automação de Testes E2E - Alura

## Escopo do Produto

A plataforma **Alura** é um ambiente de ensino online voltado para tecnologia. O sistema simula a jornada do usuário desde o cadastro e autenticação até a navegação pelas trilhas de aprendizado e dashboard, garantindo a estabilidade e a experiência correta no fluxo educacional.

## Escopo do Teste

A estratégia foca em garantir a funcionalidade correta e a integridade dos fluxos principais da plataforma, simulando o comportamento de um usuário real e validando rigorosamente as regras de negócio e os limites de entrada.

- **Mapeamento de Features:** Autenticação (Login/Cadastro) e Interface de Dashboard.
- **Features Testadas:** Fluxos críticos como cadastro de usuários (caminho feliz e validação de formato de e-mail via Regex, limites de caracteres e mensagens de erro dinâmicas do sistema como *Invalid e-mail* e *Minimum length*), além de autenticação com sucesso/falha e verificação de elementos de interface pós-login.
- **Massa de Dados:** Abordagem utilizando dados estáticos para validação de campos obrigatórios e dados gerados dinamicamente via biblioteca auxiliar (`Faker-br`), com lógica de tratamento de strings para conversão em formatos aceitos pelo sistema.
- **Tipos de Testes:**
  - **Testes E2E (End-to-End):** Validação funcional dos fluxos de ponta a ponta que percorrem a aplicação, abrangendo jornadas críticas como o ciclo completo de cadastro de novos usuários e o fluxo de autenticação e navegação na dashboard.
  - **Testes de Integração:** Validação da comunicação e comportamento conjunto entre a interface de usuário (UI) e os componentes de validação de regras de negócio, asserções negativas para mensagens de erro dinâmicas e o gerenciamento de parâmetros de ambiente (`Cypress.env`).

## Arquitetura e Estrutura

O projeto foi organizado para garantir a separação entre a lógica de teste e a configuração das requisições, facilitando a manutenção e a escalabilidade.

- **Padrão de Projeto:** Abstração de comandos customizados em `cypress/support/commands.js` (`preencherCadastro()` e `fazerLogin()`) para reutilização de código, além do uso de `Cypress.env` para gerenciamento centralizado de parâmetros e credenciais de ambiente.
- **Tecnologias e Ambiente:** `Cypress` | `JavaScript (ES6+)` | `Node.js` | `Git` | `Windows 11` | `Chrome` | `Faker-br`

## Passos para Configurar e Reproduzir o Projeto

## Pré-requisitos
Certifique-se de possuir as seguintes ferramentas instaladas em seu ambiente:
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (versão 20.15.0 ou superior recomendada)
* Um editor de código de sua preferência (ex: [VS Code](https://code.visualstudio.com/))

### Clonando ou baixando o projeto

No GitHub, clique em **Code** e faça o download do arquivo ZIP, ou clone o repositório via terminal:

```bash
git clone https://github.com/FabioGVL/Alura-Cypress.git
```

Extraia os arquivos (caso tenha baixado em ZIP) e abra a pasta do projeto no VS Code.

### Instalando as dependências e executando os testes

No terminal integrado do VS Code, instale as dependências do projeto:

```bash
npm install
```

Para abrir a interface gráfica interativa do Cypress:

```bash
npx cypress open
```

> Na janela do Cypress, selecione **E2E Testing**, escolha o navegador desejado e clique no teste que deseja executar.

Para executar os testes em modo headless (linha de comando):

```bash
npx cypress run
```

> Os vídeos dos resultados dos testes ficarão salvos automaticamente no diretório `cypress/videos`.

## Resumo dos Comandos

| Objetivo | Comando |
| :--- | :--- |
| **Instalar dependências** | `npm install` |
| **Abrir interface gráfica (UI Mode)** | `npx cypress open` |
| **Executar testes em modo Headless** | `npx cypress run` |
| **Executar testes em navegador específico** | `npx cypress run --browser chrome` |
