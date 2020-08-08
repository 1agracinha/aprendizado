function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com '+nota)
    }
}

soBoaNoticia(8.1)//return Aprovado com 8.1
soBoaNoticia(7.1)//Não retorna nada

//=============================================== // ====================

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade...'+valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)//Falso até aqui, ou seja, não retorna nada
seForVerdadeEuFalo(-1)//A partir daqui é tudp verdade
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 21])
seForVerdadeEuFalo({})
