// function imprimirNomeGritado(obj){
//     console.log(obj.name.toUpperCase() + '!!!')
// }

// const obj = { nome: 'Roberto' }
// imprimirNomeGritado(obj)//ERROR, pois não pode ler uma propriedade não definida (name)


function tratarErroLancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'

    throw{//Usado para tratar erros 
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {//tenta executar o comando 
        console.log(obj.name.toUpperCase() + '!!!')

    } catch (e) {//Se der erro cai aqui
        tratarErroLancar(e)
        
    }finally{//é chamado independente de erro ou não
        console.log('final')
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)