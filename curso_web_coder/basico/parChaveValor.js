//Par Nome(chave)/Valor

const saudacao = 'Opa'//contexto lexico 1, pois foi definido no contexto desse file

function exec(){
    const saudacao = 'Falaaa'//contexto lexico 2, pois foi definido nessa funcao
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor

const cliente ={
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: "Rua Mundo Legal",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)