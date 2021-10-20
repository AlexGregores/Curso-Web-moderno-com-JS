//Obeject.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer' , preco:1.99, tag:'promoÇão'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal

const pessoa = {nome : 'Juliana', idade:35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome // não consegue excluir pois esta selado
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = seledo + valores constantes

