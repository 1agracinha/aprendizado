//factory é uma funcao que retorna um objeto


//factory simples
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())


//funcao factory com parametros padroes
function criarProduto(nome = 'Sem nome', tipo = 'Sem tipo', preco = 'indefinido'){
    return {
        nome,
        tipo,
        preco
    }//não precisa por nome: nome e ect. porque os parametros tem o mesmo nome
}
console.log(criarProduto('Caneta', '0.7', 4.50))
console.log(criarProduto(nome = 'Apagador', preco = 12.85))