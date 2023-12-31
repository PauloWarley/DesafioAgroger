### Objetivo

Desenvolver uma aplicação com `ExpressJS + TypeORM + Typescript + Jest` que rode na porta 3335, utilize o banco de dados SQLite e seja possível rodar as migrations para criar uma tabela de produtos com os campos listados abaixo e tenha uma roda de adicionar, editar e excluir o produto. 

### Tabela **Products**

```jsx
id: uuid | int
name: varchar
price: decimal(10,2)
description: text
color: string
size: string
updated_at: datetime
created_at: datetime
```

### Critérios de aceitação:

- [X]  Porta 3335
- [X]  Migrations para criar a tabela
- [X]  Projeto com typescript
- [X]  Isolar responsabilidades
    - [X]  Router
    - [X]  Controller
    - [X]  Service
    - [X]  Repository
- [ ]  Testar as 3 funções com jest
- [X]  Rotas que deverão ser criadas
    - [X]  Adicionar produto
    - [X]  Editar produto
    - [X]  Remover produto