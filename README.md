# Projeto Clínica

Projeto desenvolvido durante o estágio com o objetivo de praticar o desenvolvimento de uma aplicação que realiza consultas a uma API REST utilizando TypeScript.

## Objetivo

Criar uma aplicação capaz de consultar informações de atendimentos de uma clínica através de uma API simulada.

## Tecnologias

* TypeScript
* REST
* Fetch
* JSON Server
* Zod

## Tasks

### Task 01 — Comunicação com a API

Nesta etapa foi criada a estrutura inicial do projeto e configurado o ambiente TypeScript.

Foi utilizado o JSON Server para criar uma API simulada, contendo dados fictícios de atendimentos.

A aplicação realiza uma requisição `GET` utilizando `fetch()` para consultar os atendimentos através do endpoint:

`GET http://localhost:3000/atendimentos`

Fluxo da aplicação:

```text
Aplicação TypeScript
        ↓
      Fetch
        ↓
API Mock (JSON Server)
        ↓
     db.json
        ↓
Dados dos atendimentos
```

### Task 02 — Requisição com Fetch

Nesta etapa foi criada e aprimorada a função responsável por buscar os atendimentos através do Fetch.

A função `buscarAtendimentos()` realiza uma requisição `GET` para a API simulada:

`http://localhost:3000/atendimentos`

Após receber a resposta, a aplicação verifica se a requisição foi realizada corretamente através de `response.ok`.

Caso a resposta não seja bem-sucedida, um erro é gerado e tratado através de `try/catch`.

Os dados retornados pela API são convertidos de JSON para dados utilizáveis pela aplicação através de `response.json()`.

#### Fluxo da requisição

```text
Aplicação
    ↓
buscarAtendimentos()
    ↓
Fetch
    ↓
API Mock
    ↓
Resposta HTTP
    ↓
Verificação de response.ok
    ↓
 ┌──────────────┐
 │              │
Sucesso       Erro
 │              │
 ↓              ↓
JSON          catch
 ↓              ↓
Dados         Tratamento