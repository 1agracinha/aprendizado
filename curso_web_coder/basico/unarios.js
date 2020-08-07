let num1 = 1
let num2 = 2

num1++//acrescenta 1 ao valor da variavel
console.log(num1)//Return 2

--num1//Reduz em 1 o valor da variavel e define uma prioridade na expressão
console.log(num1)//Return 1

console.log(++num1 === num2--)//True, pois o ++num1 tem prioridade e o num2-- só será decrementado após a execucao desse comando


