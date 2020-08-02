//function without return
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)//return 5
imprimirSoma(2)//return NaN
imprimirSoma(2, 3, 4, 5, 6)//return apenas a soma dos 2 primeiros

//=============================================================

//Function with return
function soma(a, b = 0){//Usa-se igual quando quer estabeler um valor por padrao quando um nao é passado
    return a + b
}

console.log(soma(2, 3))//return 5
console.log(soma(2))//return 2

//================================================================

//Armazenando function em uma variavel
const imprimirSubtracao = function (a, b){
    console.log(a-b)
}

imprimirSubtracao(2, 3)

//================================================================

//Armazenando uma arrow function em uma variavel
const dividir = (a, b) => {
    return a / b
}
console.log(dividir(2,3))

//retorno implicito
const multiplicar = (a, b) => a * b
console.log(multiplicar(3, 4))

const imprimir = a => console.log(a)
imprimir('Hello, World!')