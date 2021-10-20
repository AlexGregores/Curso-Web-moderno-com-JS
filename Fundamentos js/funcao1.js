//definição
// função = receita de bolo //ação, verbo
// função define um bloco(delimitado por chaves) trecho de código
// função recebe os dados(paramentro de entrada) e retorna um resultado
// bloco de códigos// toda função tem um nome


//função sem retorno
function impriirSoma(a,b) {
    console.log(a + b)
}
impriirSoma(2,3)

//função com retorno
function soma(a, b = 1){
    return a + b
}
console.log(soma(2,3))
console.log(soma(2))