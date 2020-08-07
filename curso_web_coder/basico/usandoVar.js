//Variaveis e escopo com var

{
    {
        {

            var sera = "Será???"//variavel dentro de escopo de blocos
        }
    }
}
console.log(sera)//return Será???

//==========================================

function teste() {
    var local = 123//variavel dentro de escopo de funcoes
    console.log(local)//return 123
}
teste()
//console.log(local)  //return ERROR, pois está fora do escopo


//=============================================================

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)//return 2
}
console.log('fora =', numero)//return 2 pois não existe escopo de bloco pra var
