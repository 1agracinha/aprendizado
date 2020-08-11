class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log('Meu nome é ' + this.nome)
    }
}
const p1 = new Pessoa('João')
p1.falar()//return


//com funcao factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }//funcao factory, ou seja retorna um objeto
}

const p2 = criarPessoa('maria')
p2.falar()//return Maria

//funcao construtora
function fazerPessoa (nome) {
    this.nome = nome
    this.falar = function() {
        console.log('Meu nome é ' + this.nome)
    }
}
const p3= new fazerPessoa('Jose')
p3.falar()//return jose