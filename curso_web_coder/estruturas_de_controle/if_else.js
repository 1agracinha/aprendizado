const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}

imprimirResultado(10)//Return Aprovado
imprimirResultado(4)//Return Reprovado
imprimirResultado('Epa!')//Return Reprovado, pois não foi tratado