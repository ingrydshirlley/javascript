/************************************************************************
 * Objetivo: api para interagir com banco de dados (get, post, delete, put)
 * Data: 14/04/2023
 * Autor: Ingryd
 * Versão: 1.0
 *************************************************************************/

/************************************************************************
para realizar a conexao com o banco, iremos uilizar o prisma
    npm install prisma --save
    npx prisma
    npx prisma init
    npm install @prisma/client
 *************************************************************************/

/* Import das dependencias para criar a API */
//responsavel pelas requisições
const express = require('express');
//resposável pelas permissões das requisições
const cors = require('cors');
//responsável pela manipulação do body da requisição
const bodyParser = require('body-parser');
//cria um objeto com as informações da classe express
const app = express();
//define as permissões no header da API
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    app.use(cors());
    next();
});

//endpoint: retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function(request, response) {})

//endpoint: retorna dados do aluno pelo id
app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response) {})

//endpoint: insere um novo aluno
app.post('/v1/lion-school/aluno', cors(), async function(request, response) {})

//endpoint: atualiza um aluno
app.put('/v1/lion-school/aluno/:id', cors(), async function(request, response) {})

//endpoint: exclui um aluno
app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response) {})