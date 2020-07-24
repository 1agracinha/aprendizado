let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)//return true
console.log(!isAtivo)//return false

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![ ])
console.log(!!{ })
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos...")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("finalizando:")
console.log(''||null||0||"epa")//return o valor verdadeiro, no caso "epa"


let nome = ''
console.log(nome || "Sem nome")//return o valor verdadeiro, ou != false