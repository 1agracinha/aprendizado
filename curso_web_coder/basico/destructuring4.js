function rand([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]//invertendo, caso min seja > que max. Um assume a posicao do outro
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //arredonda o result pra baixo. Se fosse pra cima, seria ceil
}

console.log(rand([]))//segue com max e min padroes
console.log(rand([992]))//min é 992
console.log(rand([40, 50]))//min 40 e max 50
console.log(rand([, 10]))//min 0 e max é 10
