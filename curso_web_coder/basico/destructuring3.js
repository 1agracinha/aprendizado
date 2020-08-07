function rand({min = 0, max = 1000}){//Atribuiu 0 e 1000 como valores padrao caso n seja definido um
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))//retorna um valor entre 40 e 50
console.log(rand({min: 955}))//como passou só o min, o max vai ser o padrao 1000
console.log(rand({}))//utiliza os valores padroes de max e min
//console.log(rand())//erro pois há prop undefined
