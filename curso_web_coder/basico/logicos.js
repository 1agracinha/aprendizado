// Operdador E: todos precisam ser V para retornar V
// Operador OU: basta um V para ser V
// Operador OU EXCLUSIVO: precisa de pelo menos 1 V e 1 F para ser V
// Operador de Negacao Logica: F vira V  e V vira F


function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unario

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }//Cria automatico a chave, novo recurso ES2015
}

console.log(compras(true, true))//Compra sorvete e TV50
console.log(compras(true, false))//Compra sorvete e TV32
console.log(compras(false, false))//Não compra nada e se mantem saudável


