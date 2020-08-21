// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá 
// imprimir o resultado e o resto da divisão destes dois valores.

const calcularRestoEdivisao = (dividendo, divisor) => {
    const calculos = {
        resultado: dividendo / divisor,
        resto: dividendo % divisor
    }
    const { resultado, resto } = calculos
    console.log(`O resultado de ${dividendo} / ${divisor} = ${resultado}\n O resto da divisão = ${resto}`)
}

calcularRestoEdivisao(4, 3)