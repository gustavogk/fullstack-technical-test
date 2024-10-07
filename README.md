<p align="center">
  <img src=".github/nodejs-logo-svgrepo-com.svg" width="400"/> 
</p>

<p align="center">	
   <a href="https://www.linkedin.com/in/gustavo-gk/">
      <img alt="GustavoAssunção" src="https://img.shields.io/badge/-GustavoAssunção-5965e0?style=for-the-badge&logo=Linkedin&logoColor=white" />
   </a>
  <img alt="Languages" src="https://img.shields.io/github/languages/count/gustavogk/fullstack-technical-test?style=for-the-badge" />
  <img alt="lastcommit" src="https://img.shields.io/github/last-commit/gustavogk/fullstack-technical-test?style=for-the-badge" />
  <a href="mailto:gust.krv@gmail.com">
   <img alt="Email" src="https://img.shields.io/badge/-GustavoAssunção-5965e0?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
</p>

<p align="center">
    Teste Técnico - Desenvolvedor Back-End / Full Stack | NodeJS + ReactJs
</p>

<div align="center">
  <sub> Made with 💖 by
    <a href="https://github.com/gustavogk"> Gustavo Assunção.
    <h1></h1>
  </sub>
</div>

# 📌 Contents

* [Technologies](#rocket-technologies)
* [How to Run](#computer-how-to-run)
* [Documentation](#documentation)
* [Issues](#bug-issues)
* [Contributing](#sparkles-issues)

# :rocket: Technologies
This project was made using the follow technologies:
     
* [NodeJS](https://nodejs.org/pt)
* [Prisma](https://www.prisma.io/)
* [React](https://reactjs.org/)
* [Express](https://expressjs.com/pt-br/)

# :computer: How to run
  
```bash
# Clone Repository
$ git clone https://github.com/gustavogk/fullstack-technical-test
```

```bash
# Install back-end
$ npm install

# Run code
$ npm run dev
```

```bash
# In other terminal
# Acess frontend folder
$ cd frontend

# Install front-end
$ npm install

# Run code
$ npm start
```

# :green_book: Documentation

###  **GET** `/users`
- **Descrição**: Retorna uma lista de todos os usuários cadastrados no sistema.
- **Exemplo de resposta**:

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "documents": [
      {
        "id": 1,
        "name": "Contract",
        "status": "true",
        "userId": 1
      }
    ]
  }
]
```

###  **POST** `/users`
- **Descrição**: Cria um novo usuário no sistema.
- **Parâmetros esperados (no corpo da requisição)**:
  - `name` (string, obrigatório): Nome do usuário.
  - `email` (string, obrigatório): Email do usuário.

#### Exemplo de corpo da requisição:

```json
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}
```

### **PUT** `/users/:id`
- **Descrição**: Atualiza as informações de um usuário existente.
- **Parâmetros esperados (no corpo da requisição)**:
  - `name` (string, opcional): Nome do usuário.
  - `email` (string, opcional): Email do usuário.

#### Exemplo de corpo da requisição:

```json
{
  "name": "Jane Doe Updated",
  "email": "jane.doe.updated@example.com"
}

```

### **DELETE** `/users/:id`
- **Descrição**: Exclui um usuário existente e seus documentos associados.
- **Parâmetros esperados**:
  - `id` (inteiro, obrigatório): ID do usuário a ser excluído.

#### Exemplo de resposta:

```json
{
  "message": "Usuário deletado com sucesso."
}

```

### **GET** `/documents`
- **Descrição**: Retorna uma lista de todos os documentos cadastrados no sistema.

#### Exemplo de resposta:

```json
[
  {
    "id": 1,
    "name": "Contract",
    "status": "true",
    "userId": 1
  },
  {
    "id": 2,
    "name": "Invoice",
    "status": "true",
    "userId": 1
  }
]

```
### **POST** `/documents`
- **Descrição**: Cria um novo documento vinculado a um usuário.
- **Parâmetros esperados (no corpo da requisição)**:
  - `name` (string, obrigatório): Nome do documento.
  - `status` (booleano, obrigatório): Status do documento ("ativo" ou "inativo").
  - `userId` (inteiro, obrigatório): ID do usuário ao qual o documento está vinculado.

#### Exemplo de corpo da requisição:

```json
{
  "name": "Contract",
  "status": true,
  "userId": 1
}

```

### **PUT** `/documents/:id`
- **Descrição**: Atualiza um documento existente.
- **Parâmetros esperados (no corpo da requisição)**:
  - `name` (string, opcional): Nome do documento.
  - `status` (booleano, opcional): Status do documento ("ativo" ou "inativo").
  - `userId` (inteiro, opcional): ID do usuário ao qual o documento está vinculado.

#### Exemplo de corpo da requisição:

```json
{
  "name": "Contract Updated",
  "status": false,
  "userId": 1
}
```

### **DELETE** `/documents/:id`
- **Descrição**: Exclui um documento existente.
- **Parâmetros esperados**:
  - `id` (inteiro, obrigatório): ID do documento a ser excluído.

#### Exemplo de resposta:

```json
{
  "message": "Documento deletado com sucesso."
}

```

# :bug: Issues

Create a <a href="https://github.com/gustavogk/async-repo-cloner/issues">new issue report</a>, it will be an honor to be able to help you solve and further improve our application.

# :sparkles: Contributing

- Fork this repository;
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: My new feature'`;
- Push to your branch: `git push origin my-feature`.

Made with 💖 by [Gustavo Assunção](https://www.linkedin.com/in/gustavo-gk/). 

Thank you! 🌠

