function criarProduto(nome,preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto("gritarra",3700.00))
console.log(criarProduto("carro",56000.00))