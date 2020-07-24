const valores = [1.7, 8.9, 6.2, 0.3]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') //Adciona valores ao array
console.log(valores)

console.log(valores.pop())//apaga o ultimo valor do array
delete valores[0]//Apaga determinado valor
console.log(valores)

console.log(typeof valores)