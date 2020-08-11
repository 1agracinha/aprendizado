const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)//Acessando o attr do OBj Pessoa
    }
}
pessoa.falar()//Return Bom Dia

const falar = pessoa.falar
falar()//Return Undefined, pois o contexto já mudou //Conflito entre funcional e OO

const falarPessoa = pessoa.falar.bind(pessoa)//A partir dessa funcao o this sempre apontara para pessoa
falarPessoa()//return Bom dia


//O bind amarra uma funcao ao objeto que vc quer