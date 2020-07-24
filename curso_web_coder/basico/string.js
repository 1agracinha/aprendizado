const escola = "cod3r"
console.log(escola.charAt(4))//retrurn r, ou seja a posicao 4 da string
console.log(escola.charAt(5))//return valor vazio
console.log(escola.charCodeAt(3))//return o valor da posicao 3 na tabela ASCII (3 === 51)
console.log(escola.indexOf('c'))// return a posição de tal(c) valor
console.log(escola.substring(1))// return os valores depois da posição 1
console.log(escola.substring(0, 3))//return os valores entre a posição 0 e 3, sem incluir a ultima
console.log("Escola ".concat(escola.concat("!")))//return Escola cod3r!
console.log(escola.replace(3, "e"))//return escola renomeada a posicao 3
console.log(escola.replace(/\d/, "e"))//substitui todos os digitos pela letra e (regex)
console.log('Ana,Maria,Pedro'.split(','))//transforma uma string separada por "," em um array