//armazenando uma função em uma variável
const imprimirSoma = function(a , b){
    console.log(a + b)
}
imprimirSoma(2 , 3)

//armazenando funÇão arrow em uma variável
const soma = (a , b) => {
    return a + b
}
console.log(soma(2 ,3 ))

//retorno implicito // uma unica sentença de codigos
const subtracao = (a, b) => a - b //rrow function // 
console.log(subtracao(2 , 3))

const imprimir2 = a => console.log(a) //2 parametros(a,b)utiliza parentes mas quando apenas 1 não é necessário
imprimir2('legal!!')