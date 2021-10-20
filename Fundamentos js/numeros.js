const peso1= 1.0
const peso2= Number("2.0")

console.log(peso1)
console.log(peso2)
console.log(peso1,peso2)

console.log(Number.isInteger(peso1))//verificar se é um numero inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 6.7
const avaliacao2 = 7.8

const total = avaliacao1 * peso1 * avaliacao2 * peso2
const media = total / (peso1 *peso2)

console.log(media)
console.log(media.toFixed(0))// numero de casas a ser mostrado 0 //porem nao altera valor de media
console.log(media.toFixed(4))// numero de casas 4 // mesmo porque é uma constante
console.log(media.toLocaleString(2))//virgula
console.log(media.toString(2))// converte em numero binario

console.log(typeof Number)// função
console.log(typeof media)// numeber







