console.log('01 -','1' == 1)//Return TRUE, pois o == leva em consideração apenas o valor
console.log('02 -', '1' === 1)//Return FALSE, pois o === considera valor e tipo do elemento
console.log('03 -', '3' != 3)//Return FALSE, pois != só considera valor
console.log('04 -', '3' !== 3)//RETURN TRUE, pois !== considera valor e tipo da variavel
console.log('05 -', 3 < 2 )//return FALSE
console.log('06 -', 3 > 2)//return TRUE
console.log('07 -', 3 <= 2)//return FALSE
console.log('08 -', 3 >= 2)//return TRUE

const d1 = new Date(0)
const d2 = new Date(0)

console.log('09 -', d1 === d2)//Return FALSE, pois estará comparando endereco de memoria
console.log('10 -', d1 == d2)//Return FALSE, pois estará comparando endereco de memoria
console.log('11 -', d1.getTime() === d2.getTime())//Return TRUE, pois tem o mesmo valor e tipo
console.log('12 -', d1.getTime() == d2.getTime())//Return TRUE, pois tem o mesmo valor
console.log('13 -', undefinde == null)//Return TRUE pois têm o mesmo valor
console.log('14 -', undefinde === null)//Return FALSE pois são tipos diferentes

//É mais adequado utilizar o estritamente igual (===)!