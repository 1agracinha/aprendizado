const notas = [1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7]

//sem callback
let notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//Com callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7 //return true or false. If return true, so will add in the array
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)