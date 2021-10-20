//coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = "cadeira"
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo :"A4",
    valor: 89000,
    proprietario : {
        nome :'Alex',
        idade: 21,
    
        endereco: {
            logradouro: "Nowhere strett",
            numero : 666,

}
},
condutores : [{
    nome : "July",
    idade : 19
},{
    nome: 'Mary',
    idade : 24
  }]
}
console.log(carro)
console.log(carro.valor)
console.log(carro.condutores.length)
