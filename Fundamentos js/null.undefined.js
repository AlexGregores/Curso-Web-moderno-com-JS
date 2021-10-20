let valor// declarada mas não inicilizada
console.log(valor)

valor = null// ausencia de valor
console.log(valor)

const produto = {}
console.log(produto)
console.log(produto.preco)

produto.preco = 3.33

console.log(produto)

produto.preco = null

console.log(produto)
console.log(!!produto.preco)
