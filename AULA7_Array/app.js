//{} formato json de dados
//[] formato array de dados --- para o js, um array é um objeto

const listaNomes = ['jose', 'maria', 'luiz', 'carlos']
const listaProdutos = ['teclado', 'mouse', 'monitor', 'computador', 'fone', 'impressora', 'scanner', 'webcam']

//esse array de cima substitui isso aqui:
/* const nomes1 = 'jose'
const nomes2 = 'maria'
const nomes3 = 'luiz'
const nomes4 = 'carlos'*/

const manipulandoElementos = function() {
    //exibe todos os elementos do array
    console.log(listaNomes)

    //exibe apenas um elemento conforme seu indice
    console.log(listaNomes[0])
    console.log('o nome do usuario é ' + listaNomes[0])

    //verifica o tipo de dados de um elemento array
    console.log(typeof(listaNomes[0]))

    //percorrendo um array usando while
    let cont = 0 //start
    let qtdeItens = listaNomes.length //stop

    console.log('\nexibindo dados do array com while')
    while (cont < qtdeItens) {
        console.log(`nome: ${listaNomes[cont]}`)
        cont += 1;
    }

    //percorrendo um array usando for
    console.log('\nexibindo dados do array com for')
    let qtdeNomes = listaNomes.length //stop
    for (let cont = 0; cont < qtdeNomes; cont++)
        console.log(`nome: ${listaNomes[cont]}`)

    console.log('\nexibindo dados do array com foreach') //for each é um metodo de um ojeto array q retorna uma função de callback
    listaNomes.forEach(function(nomes) {
        console.log(`nome: ${nomes}`)
    })

    //adicionando elementos novos no array
    //push - add no final
    listaNomes.push('alexandre')
    listaNomes.push('marcos', 'lucas')
    console.log(listaNomes)

    //unshift - add no inicio
    listaNomes.unshift('ana maria')
    console.log(listaNomes)


    //removendo elementos no array
    //pop remove smp o ultimo elemento do array
    listaNomes.pop()
    console.log(listaNomes)

    //Shift - remove o primeiro elemento do array
    //(reorganiza todos os próximos elementos)
    listaNomes.shift();
    console.log(listaNomes)

}

const filtrandoElementos = function() {
    //indexof
    console.log(listaProdutos)

    if (listaProdutos.indexOf('monitor') >= 0)
        console.log('item encontrado')
    else
        console.log('item nao encontrado')


    //slice - permite criar uma copia do array podendo selecionar os itens
    /* const novosProdutos = listaProdutos.slice() */
    const novosProdutos = listaProdutos.slice(0, 3)
    console.log(listaProdutos)
    console.log(novosProdutos)
}

const removerElemento = function(array, nomeItem) {
    //cria uma copia do array
    let novaLista = listaProdutos.slice()

    let nome = nomeItem
    let status
    let indice = novaLista.indexOf(nome)

    if (indice >= 0) {
        listaProdutos.splice(indice, 1) //splice permite remover um elemento pelo indice
        status = true

    } else {
        status = false
    }

    if (status) {
        return novaLista
    } else {
        return status
    }
}

console.log(removerElemento(listaProdutos, 'monitor'))
console.log(listaProdutos)