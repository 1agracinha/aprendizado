console.log('a =', a)//return undefined, pois foi declarada antes de ser inicializada
var a = 2
console.log('a =', a)//return 2

console.log('b =', b)//return ERROR
let b = 2
console.log('b =', b)

/*JS declara variaveis antes de executar o codigo, ou seja,
vc pode usar uma variavel e depois declarar ela. 
Apenas declara, NÃO INICIALIZA!

Funçõs nomedas tambem podem ser acessadas antes de serem declaradas.*/
