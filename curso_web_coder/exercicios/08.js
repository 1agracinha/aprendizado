// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontuacoes e quando fez seu pior
// jogo. (Número do pior jogo).

calcularDesempenho("2, 1, 3, 0, 8, -9")

function calcularDesempenho(pontuacoes) {
    pontuacoes = pontuacoes.split(",").map(Number)
    let recordes = 0, maior_pontuacao = pontuacoes[0], pior_jogo = 0

    for (let i in pontuacoes) {
        if (pontuacoes[i] > maior_pontuacao) {
            maior_pontuacao = pontuacoes[i]
            recordes++
        }
        if (pontuacoes[i] < pontuacoes[pior_jogo]) {
            pior_jogo = parseInt(i)
        }
    }
    const estatisticas = [`Nº Recordes: ${recordes}`, `Pior Jogo: ${pior_jogo + 1}º`]
    return console.log(estatisticas)
}

