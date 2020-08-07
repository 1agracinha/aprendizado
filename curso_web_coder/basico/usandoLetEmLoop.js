for(let i = 0; i < 10; i++){
    console.log(i)//return 0...9
}
//console.log('i = '+i)//return ERRROR pois let tem escopo de bloco


//===============================================
const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()//return 2
funcs[8]()//return 8, pois let tem escopo de bloco