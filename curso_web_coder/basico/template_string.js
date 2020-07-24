const nome = "Rebecca"
const concatenacao = "Olá, "+nome+"!" //exemplo inline

const template = `
    Olá
    ${nome}!

`//exemplo com quebras de linha

console.log(concatenacao, template)

//expressões...
console.log(`1 + 1 = ${1+1}`)
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)