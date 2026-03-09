# Knowledge Hub - Projeto Final Web Moderno

Este é o projeto final do curso Web Moderno. A aplicação é um sistema de gerenciamento de artigos de conhecimento, permitindo a organização de conteúdos em categorias hierárquicas, controle de usuários e estatísticas em tempo real.

---

## 🛠️ Tecnologias Utilizadas

### Backend
* Node.js & Express: Servidor e gerenciamento de rotas.
* Knex.js: Query builder para interagir com bancos de dados relacionais (SQL).
* MongoDB: Banco NoSQL utilizado para persistência de estatísticas e performance.
* Passport & JWT: Sistema de autenticação e proteção de rotas.

### Frontend
* Vue.js: Framework para a construção da interface single-page (SPA).
* Bootstrap: Estilização e componentes responsivos.
* Axios: Cliente para consumo da API do backend.

---

## 📂 Estrutura do Projeto

* /backend: Contém a API, configurações de banco (knexfile.js), migrations e serviços de agendamento (schedule).
* /frontend: Contém os componentes de interface, assets e configurações de build do Vue.

---

## 🚀 Como Rodar a Aplicação

Siga os passos abaixo para configurar os dois ambientes localmente.

### 1. Configuração do Backend
Entre na pasta do servidor e instale as dependências:
cd backend
npm install

Configuração de Ambiente:
Crie um arquivo .env na raiz da pasta backend (utilize o arquivo env_file como base) e preencha com suas credenciais de banco de dados e chaves secretas.

Banco de Dados (SQL):
Para criar as tabelas no seu banco de dados, execute as migrations:
npx knex migrate:latest

Iniciar o servidor:
npm start

---

### 2. Configuração do Frontend
Abra um novo terminal, entre na pasta da interface e instale as bibliotecas:
cd frontend
npm install

Iniciar o cliente:
Para rodar o projeto em modo de desenvolvimento, utilize o comando:
npm run serve

A aplicação estará disponível no seu navegador em http://localhost:8080.

---

Projeto desenvolvido como critério de conclusão do curso Web Moderno.
