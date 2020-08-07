console.log('a =', a)//return undefined, pois foi declarada antes de ser inicializada
var a = 2
console.log('a =', a)//return 2

console.log('b =', b)//return ERROR
let b = 2
console.log('b =', b)

//JS adiciona as varaiaveis à memoria antes 
//mesmo de executar o codigo
