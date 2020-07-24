const peso1 = 1.0
const peso2 = Number('2.7')
console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //return true
console.log(Number.isInteger(peso2))//return false


const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1*peso1 + avaliacao2*peso2
const media = total/(peso1 - peso2)
console.log(media)
console.log(media.toFixed(2))//retorna valor aproximado com 2 casas decimais
console.log(media.toString()) //transforma para string
console.log(media.toString(2)) //transforma para um valor binario
console.log(typeof media)
