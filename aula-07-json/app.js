const listaProdutosJSON = {}
const listaProdutos = ['teclado', 'mouse', 'monitor', 'computador', 'fone', 'impressora', 'scanner', 'webcam']
const listaNomes = ['jose', 'maria', 'luiz', 'carlos']

//exemplo de um json com estrutura de array
/* const produtos = [
    { nome: "teclado", cor: "preto", quantidade: 50 },
    { nome: "monitor", cor: "branco", quantidade: 30 },
    { nome: "mouse", cor: "branco", quantidade: 200 },
] */

const listagemProdutos = function() {
    let listProdutosJSON = {}

    let listProdutos = [
        { nome: 'teclado', valor: 200, quantidade: 50 },
        { nome: 'monitor', valor: 1000, quantidade: 70 },
        { nome: 'mouse', valor: 100, quantidade: 350 }
    ];

    let listCores = [' branco', ' preto', ' cinza'];
    let listTipoTeclado = ['mecanico', ' semimecanico', ' membrana '];
    let listTipoMonitor = ['lcd', ' full-hd', ' oled', ' 4k'];

    //add opcoes (chaves) no teclado
    listProdutos[0].cores = listCores;
    listProdutos[0].tipo = listTipoTeclado;

    //add opcoes (chaves) no monitor
    listProdutos[1].cores = listCores;
    listProdutos[1].tipo = listTipoMonitor;

    //add opcoes (chaves) no mouse
    listProdutos[2].cores = listCores;

    //add uma chave de produtos e coloca toda a estrutura dos produtos dentro dela
    listProdutosJSON.produtos = listProdutos
        /*console.log(listProdutosJSON)*/

    console.log('\nnome: ' + listProdutosJSON.produtos[1].nome)
    console.log('valor: ' + listProdutosJSON.produtos[1].valor)
    console.log('cor: ' + listProdutosJSON.produtos[1].cores)
    console.log('tipo: ' + listProdutosJSON.produtos[1].tipo + '\n')

    console.log('nome: ' + listProdutosJSON.produtos[2].nome)
    console.log('valor: ' + listProdutosJSON.produtos[2].valor)
    console.log('cor: ' + listProdutosJSON.produtos[2].cores + '\n')

    console.log('nome: ' + listProdutosJSON.produtos[0].nome)
    console.log('valor: ' + listProdutosJSON.produtos[0].valor)
    console.log('cor: ' + listProdutosJSON.produtos[0].cores)
    console.log('tipo: ' + listProdutosJSON.produtos[0].tipo + '\n')

    //retorna todos os dados de produto (1° nivel do dados do json)
    listProdutosJSON.produtos.forEach(function(dadosProduto) {
        console.log('nome: ' + dadosProduto.nome)
        console.log('nome: ' + dadosProduto.valor)

        if (dadosProduto.cores != undefined) {
            //retorna todas as cores existentes para cada produto
            dadosProduto.cores.forEach(function(dadosCores) {
                console.log('**' + dadosCores)
            })
        }

        //fizemos o if pq o mouse nao tem tipo. 
        if (dadosProduto.tipo != undefined) {
            //retorna todos os tipos existentes para cada produto
            dadosProduto.tipo.forEach(function(dadosTipo) {
                console.log('**' + dadosTipo)
            })
        }
    })

    //colocando arrays dentro de json
    /* listaProdutosJSON.produtos = listaProdutos
    listaProdutosJSON.clientes = listaNomes */

    //mostrando a estrutura completa / produto pelo indice / nome pelo indice
    /* console.log(listaProdutosJSON)
    console.log(listaProdutosJSON.produtos[5])
    console.log(listaProdutosJSON.clientes[2]) 
    */
}

listagemProdutos()