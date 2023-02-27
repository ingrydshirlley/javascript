/*****************************************************************
 * Objetivo: tabuada com dois valores 
 * Data: 22/02//2023
 * Autor: Ingryd
 * Versão: 1.0
******************************************************************/

function tabuada (multiplicandoMin, multiplicandoMax, multiplicadorMin, multiplicadorMax) {
    let minMultiplicando = multiplicandoMin
    let maxMultiplicando = multiplicandoMax
    let minMultiplicador = multiplicadorMin
    let maxMultiplicador = multiplicadorMax
    let contador

    for(let multiplicando = multiplicandoMin; multiplicando <= multiplicandoMax; multiplicando++) {
        console.log('\n***** ' + multiplicando + ' *****');
    
        for(let multiplicador = multiplicadorMin; multiplicador <= multiplicadorMax; multiplicador++) {
          let resultado = multiplicando * multiplicador;
          console.log(multiplicando + 'x' + multiplicador + ' = ' + resultado);

        }
    }
}

module.exports = {
    tabuada
}