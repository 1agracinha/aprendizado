function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2`)
    }else{
        return area
    }
}

console.log(area(2, 2))//4
console.log(area(2))//NaN
console.log(area())//NaN
console.log(area(2, 8, 3))//16
console.log(area(5, 5))//valor acima: 25m2 e undefined