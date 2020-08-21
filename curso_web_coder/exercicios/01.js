// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

function calcularValores(valor1, valor2){
    return {
        soma: valor1 + valor2,
        subtracao: valor1 - valor2,
        multiplicacao: valor1 * valor2,
        divisao: valor1 / valor2
    }
}

console.log(calcularValores(4, 2))