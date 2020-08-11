function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma())//0
console.log(soma(1))//1
console.log(soma(1, 2, 3, 4))//10
console.log(soma('hello ', 'Guy ', 'whats up'))//0hello Guy whats up