/************************************************************************
 * Objetivo: criar uma api para manipulação de dados de estados e cidades
 * Data: 10/03//2023
 * Autor: Ingryd
 * Versão: 1.0
 *************************************************************************/

/*************EXPLICAÇÃO*************
 * Express - dependencia do Node q permite a integração entre o protocolo 
HTTP com o código: npm install express --save

 * Cors - gerenciador de permissões para o protocolo HTTP: npm install 
cors --save

 * Body-parser - dependencia que permite manipular dados enviados pelo 
body da requisição: npm install body-parser --save
 ************************************/

/* Import das dependencias para criar a API */
//responsavel pelas requisições
const express = require('express');
//resposável pelas permissões das requisições
const cors = require('cors');
//responsável pela manipulação do body da requisição
const bodyParser = require('body-parser');
//import do arquivo de funcoes
const estadosCidades = require('./modulo/estados_cidades.js')



//cria um objeto com as informações da classe express
const app = express();
//define as permissões no header da API
app.use((request, response, next) => {
    //Permite gerenciar a origem das requisições da API
    //'*' - de qualquer lugar (PUBLICA)
    //'200.100.0.45' - de um IP especifico, responderá somente aquela maquina (PRIVADA)
    response.header('Access-Control-Allow-Origin', '*')

    //verbos(methods) que poderão ser usados como requisição
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //ativa no cors das requisições as permissões estabelecidas
    app.use((cors));
    next();
});


//endPoints, cors, async(requisição asíncrona)
/* *********FUNÇÃO 1********* */
//endPoint para Listar os Estados
app.get('/v1/senai/estados', cors(), async function(request, response, next) {
    //chama a funcao que retorna os estados
    let listaDeEstados = estadosCidades.getListaDeEstados();
    //tratamento p validar se a funçao validou o processamento
    if (listaDeEstados) {
        //retorna o json e o status code
        response.json(listaDeEstados);
        response.status(200);
    } else {
        response.status(500);
    }
});

/* *********FUNÇÃO 2********* */
//endPoint para Listar as caracteristicas do estado pela sigla
app.get('/v1/senai/estado/sigla/:uf', cors(), async function(request, response, next) {
    //:uf é uma variavel q sera utilizada p passagem de valores na url da requisiçao

    let siglaEstado = request.params.uf;
    let statusCode;
    let dadosEstado = {};

    // recebe o valor da variavel uf que sera encaminhada na url da requisição
    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        dadosEstado.message = "nao é possivel processar a requisição pois a sigla do estado nao foi informada ou nao atende a quantidade de caracteres (2 digitos)";
        statusCode = 400;
    } else {
        let estado = estadosCidades.getDadosEstados(siglaEstado);
        if (estado) {
            dadosEstado = estado;
            statusCode = 200;
        } else {
            statusCode = 404;
        }
    }
    response.status(statusCode);
    response.json(dadosEstado)
});

/* *********FUNÇÃO 3********* */
//endPoint para pegar a capital do estado pela sigla
app.get('/v1/senai/capitalEstado/sigla/:uf', cors(), async function(request, response, next) {
    let siglaEstado = request.params.uf;
    let statusCode;
    let dadosCapitalEstado = {};

    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        dadosCapitalEstado.message = "Não é possível processar a requisição, pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)";
        statusCode = 400;
    } else {
        //chama a função que filtra o estado pela sigla 
        let capital = estadosCidades.getCapitalEstado(siglaEstado)

        //valida se houve retorno válido da função
        if (capital) {
            statusCode = 200; //Estado encontrado
            dadosCapitalEstado = capital;
        } else {
            statusCode = 404; //Estado não encontrado
        }
    }
    response.status(statusCode);
    response.json(dadosCapitalEstado)
});

/* *********FUNÇÃO 4********* */
//endPoint para pegar os estados do Brasil conforme a sua região
app.get('/v1/senai/estadosRegiao/sigla/:regiao', cors(), async function(request, response, next) {
    let nomeRegiao = request.params.regiao;
    let statusCode;
    let dadosEstadoRegiao = {};

    if (nomeRegiao == '' || nomeRegiao == undefined || !isNaN(nomeRegiao)) {
        dadosEstadoRegiao.message = "Não é possível processar a requisição, pois a sigla do estado não foi informada";
        statusCode = 400;
    } else {
        //chama a função que filtra o estado pela sigla 
        let regiao = estadosCidades.getEstadosRegiao(nomeRegiao)
        console.log(regiao.estados)

        //valida se houve retorno válido da função
        if (regiao) {
            statusCode = 200; //Estado encontrado
            dadosEstadoRegiao = regiao;
        } else {
            statusCode = 404; //Estado não encontrado
        }
    }
    response.status(statusCode);
    response.json(dadosEstadoRegiao)
});

/* *********FUNÇÃO 5********* */
//endPoint para retornar as infos referente aos estados que formam a capital do Brasil.


/* *********FUNÇÃO 6********* */
//endPoint para retornar as cidades de acordo com a sigla do estado
app.get('/v1/senai/cidades', cors(), async function(request, response, next) {
    //recebe o valor da variavel q sera enviada por querystring
    //ex: www.uol.com.br?uf=sp ---- oq esta antes do ? é o endereço do site. oq estiver dps sao variaveis q tao sendo encaminhadas
    //usamos a query para receber diversas variaveis para realizar filtros. usamos o params para receber o id
    let siglaEstado = request.query.uf;
    console.log(siglaEstado)

    if (siglaEstado == '' || siglaEstado == undefined || !isNaN(siglaEstado)) {
        dadosCidade.message = "Não é possível processar a requisição, pois a sigla do estado não foi informada";
        statusCode = 400;
    } else {
        //chama a função que filtra o estado pela sigla 
        let cidades = estadosCidades.getCidades(siglaEstado)
        console.log(cidades.estados)

        //valida se houve retorno válido da função
        if (cidades) {
            statusCode = 200; //Estado encontrado
            dadosCidade = cidades;
        } else {
            statusCode = 404; //Estado não encontrado
        }
    }
    response.status(statusCode);
    response.json(dadosCidade)
});


//permite carregar os endPoint criados e aguardar as requisições
//pelo protocolo HTTP na porta 8080
app.listen(8080, function() {
    console.log('Servidor aguardando requisições na porta 8080.')
});