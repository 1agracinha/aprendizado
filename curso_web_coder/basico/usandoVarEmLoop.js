for(var i = 0; i < 10; i++){
    console.log(i)//return 0...9
}
console.log('i = '+i)//return 10

//===========================
const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()//return 10
funcs[8]()//return 10, pois var não tem escopo de bloco