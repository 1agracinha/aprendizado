//novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    enedereco:{
        logradouro: 'Rua ABC',
        numero: 100
    }
}

const {nome, idade} = pessoa //const {propriedades que vc quer tirar} = Objeto onde estão as propriedades
console.log(nome, idade)

const {nome: n, idade: i} = pessoa //o n e o i serão variaveis que armazenarão o valor das propriedades extraidas
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa //criou duas nomas propriedade e já atribuiu um valor a bemHumorada
console.log(sobrenome, bemHumorada)

const {enedereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)