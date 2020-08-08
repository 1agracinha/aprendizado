const notas = [6.7, 9.8, 7.8, 3.5, 9.0]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 19,
    peso: 56.7
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
