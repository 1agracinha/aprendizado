function teste1(num){
    if(num > 7)
        console.log(num)//Essa sentenca faz parte da condicional
    console.log('Final')//Essa faz parte apenas da funcao
}

teste1(6)//return Final
teste1(8)//return 8 e Final

//==========================

function teste2(num){
    if(num > 7);{
        console.log(num) //não faz parte da condicional
    }
}

teste2(6)//return 6
teste2(8)//return 8