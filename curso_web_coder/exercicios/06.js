// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.


const jurosSimples = (capitalInicial, taxaJuros, tempoApli) => {
    let valor = (capitalInicial * (taxaJuros / 100)) * tempoApli + capitalInicial
    return console.log(`Retorno financeiro de R$${valor} em ${tempoApli} meses`)
}


function jurosCompostos(capitalInicial, taxaJuros, tempoApli) {
    let valor = capitalInicial * Math.pow((1 + taxaJuros / 100), tempoApli)
    console.log(`Retorno financeiro de R$${valor.toFixed(2)} em ${tempoApli} meses`)
}

jurosSimples(1000, 10, 3)
jurosCompostos(1000, 10, 3)