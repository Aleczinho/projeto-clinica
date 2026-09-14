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

### Próximas etapas

As próximas tasks irão adicionar novas funcionalidades ao projeto, como:

* Exibição dos atendimentos na interface;
* Consulta de um atendimento específico;
* Estado de carregamento;
* Tratamento de erros;
* Validação dos dados com Zod.
