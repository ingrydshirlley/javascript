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
const express = require('express'); //responsavel pelas requisições
const cors = require('cors'); //resposável pelas permissões das requisições
const bodyParser = require('body-parser'); //responsável pela manipulação do body da requisição
const app = express(); //cria um objeto com as informações da classe express

//define as permissões no header da API
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    app.use(cors());
    next();
});

var bodyJSON = bodyParser.json();
var controllerAluno = require('./controller/controller_aluno.js'); //import da controller do aluno
var message = require ('./controller/modulo/config.js')
const { application } = require('express');
const json = require('body-parser/lib/types/json');
const config = require('./controller/modulo/config.js');


//endpoint: retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function(request, response) {
    let dados = await controllerAluno.selecinarTodosAlunos();
    if (dados){
        response.json(dados)
        response.status(200)
    } else {
        response.json()
        response.status(404)
    }
})

//endpoint: retorna dados do aluno pelo id
app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response) {})


//endpoint: insere um novo aluno
app.post('/v1/lion-school/aluno', cors(), bodyJSON, async function(request, response) {
    let contentType = request.headers['content-type']

    if(String(contentType).toLowerCase() == 'application/json') {
        let dadosBody = request.body;
    
        let resultInsertDados = await controllerAluno.inserirAluno(dadosBody);
        response.status(resultInsertDados.status)
        response.json(resultInsertDados)
    } else {
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }

    
})


//endpoint: atualiza um aluno
app.put('/v1/lion-school/aluno/:id', cors(), bodyJSON, async function(request, response) {
    let dadosBody = request.body //recebe os dados do body

    let idAluno = request.params.id //recebe o id do parametro
    let resultUpdateDados = await controllerAluno.atualizarAluno(dadosBody, idAluno);

    response.status(resultUpdateDados.status)
    response.json(resultUpdateDados)
})


//endpoint: exclui um aluno
app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response) {
    let idAluno = request.params.id //recebe o id do parametro
    let resultDelete = await controllerAluno.deletarAluno(idAluno);

    response.status(resultDelete.status)
    response.json(resultDelete)
})



app.listen(8080, function() {
    console.log('listening on')
})