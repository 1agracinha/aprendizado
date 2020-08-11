//Clouser é o escopo criado quando uma funcao é declarada
//Esse escopo permite a funcao acessar e manipular variaveis externas à funcao

//contexto lexico em acao

const x = 'Global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())//return local, pois a funcao foi envolvida nesse escopo
