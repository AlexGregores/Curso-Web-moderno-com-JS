//pessoa -> 123 -> {...}
const pessoa = {nome :'Joao'}
pessoa.nome = 'Pedro'

console.log(pessoa)

Object.freeze(pessoa)//congela o objeto e não é possivel mais altera-lo
pessoa.nome = 'Maria'
console.log(pessoa.nome)
