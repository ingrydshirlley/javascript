/************************************************************************
 * Objetivo: criar uma api para manipulação de dados de estados e cidades
 * Data: 10/03//2023
 * Autor: Ingryd
 * Versão: 1.0
 *************************************************************************/

/******************************************************
 * EXPRESS - "npm install express --save"
 * CORS - "npm install cors --save"
 * BODY-PARSER - "npm install body-parser --save"
 ******************************************************/

//import das dependencias para criar a api:
//responsavel pelas requisiçoes
const express = require('express');
//responsavel pelas permiçoes das requisiçoes
const cors = require('cors');
//responsavel pela manipulaçao do body da requisiçao
const bodyParser = require('body-parser');

//cria um objeto com a informaçoes da classe express
const app = express();
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    //permite gerenciar a origem das requisições da api
    //'*' - (publica) / '200.100.0.45' - IP especifico (privada)

    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    //diz quais metodos eu vou liberar pra essa api

    app.use(cors());
    next();
});
//endPoints

//endPoints para listar os estados
app.get('/estados', cors(), async function(request, response, next) {

    const estadosCidades = require('./modulo/estados_cidades.js');
    let listaDeEstados = estadosCidades.getListaDeEstados();
    response.json(listaDeEstados);
    response.status(200);
});

//permite carregar os endpoints criados e aguardar as requisicoes pelo protocolo http na porta 8080
app.listen(8080, function() {
    console.log("servidor aguardando requisicoes na porta 8080")
})