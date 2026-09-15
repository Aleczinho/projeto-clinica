# Projeto Clínica

Projeto desenvolvido durante o estágio com o objetivo de praticar o desenvolvimento de uma aplicação em TypeScript capaz de consultar atendimentos através de uma API REST simulada.

O projeto foi desenvolvido em etapas, buscando entender desde a comunicação com uma API até a validação dos dados recebidos.

## Objetivo

Criar uma aplicação capaz de consultar informações de atendimentos de uma clínica utilizando uma API simulada.

A aplicação deve conseguir realizar requisições, receber os dados da API, tratar possíveis erros e verificar se as informações recebidas estão no formato esperado.

## Tecnologias

- **TypeScript**
- **REST**
- **Fetch**
- **JSON Server**
- **Zod**

## Tasks

---

### Task 01 — Comunicação com a API

Nesta primeira etapa foi criada a estrutura inicial do projeto e configurado o ambiente TypeScript.

Para simular uma API real, foi utilizado o **JSON Server**, que permite disponibilizar dados fictícios através de endpoints HTTP.

Foi criado um arquivo `db.json` contendo os dados dos atendimentos e configurado o endpoint:

`GET http://localhost:3000/atendimentos`

A aplicação utiliza o **`fetch()`** para realizar a requisição e obter os atendimentos disponibilizados pela API.

O principal objetivo desta etapa foi entender como uma aplicação pode se comunicar com uma **API REST** e receber dados externos.

---

### Task 02 — Requisição com Fetch

Nesta etapa foi criada a função **`buscarAtendimentos()`**, responsável por realizar a comunicação com a API.

A função utiliza o **`fetch()`** para fazer uma requisição `GET` ao endpoint de atendimentos.

Após receber a resposta, foi adicionada uma verificação utilizando **`response.ok`**. Dessa forma, a aplicação consegue identificar quando a requisição não foi realizada com sucesso.

Também foi implementado o tratamento de erros utilizando **`try/catch`**. Assim, problemas como a API estar indisponível ou uma falha na comunicação não ficam sem tratamento.

Depois que a resposta é recebida, o método **`response.json()`** é utilizado para transformar o conteúdo da resposta em dados que podem ser utilizados pela aplicação.

Essa etapa ajudou a entender melhor o funcionamento de uma requisição HTTP, desde o envio da solicitação até o recebimento e processamento da resposta.

---

### Task 03 — Validação dos dados com Zod

Nesta etapa foi utilizado o **Zod** para validar os dados recebidos da API antes que eles fossem utilizados pela aplicação.

Foi criado um **schema** definindo quais informações um atendimento deve possuir:

- **`id`**
- **`nomePaciente`**
- **`tipoAtendimento`**
- **`data`**
- **`status`**

A validação é realizada depois que os dados são recebidos e convertidos de JSON. Dessa forma, a aplicação não precisa confiar automaticamente que tudo o que veio da API está correto.

Também foi utilizado **`array()`** no schema para validar a lista de atendimentos recebida pela API.

Durante a implementação surgiu uma diferença entre o formato esperado pelo schema e o formato retornado pelo JSON Server. O campo **`id`** estava sendo retornado como `string`, mesmo estando definido como número no arquivo `db.json`.

Inicialmente, o schema utilizava:

`id: z.number()`

Porém, o Zod identificava que a API estava retornando o valor como `string`. Para resolver essa diferença, foi utilizado:

`id: z.coerce.number()`

Com isso, o valor recebido como texto pode ser convertido para número durante a validação.

Também foi criado um **teste com um dado inválido** para verificar se o Zod conseguia identificar informações que não seguiam o formato definido no schema.

Essa etapa ajudou a entender uma diferença importante no desenvolvimento de aplicações:

> **Receber um dado não significa que ele está correto.**

O Zod passou a funcionar como uma **camada de validação** entre os dados recebidos pela API e os dados que serão utilizados pela aplicação.