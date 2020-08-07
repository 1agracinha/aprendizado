//Escopo de variavel com LET
var numero = 1
{
    let numero = 2
    console.log('dentro ='+numero)//return 2
}
console.log('fora ='+numero)//return 1, let assume escopo de bloco

