// Função no js é first class object (citizens)
// higher order function 

// criar de forma literal
function fun1() {}   // function nome dafunção = func1 (paramentro) {} uso obrigatorio das chaves

//armazenar em uma variável
const fun2 = function () {}

//armazenar a função dentro de um array
const array = [function (a,b) { return a + b } , fun1, fun2]
console.log(array[0] (2,3))

//armazenar em um atributo de objeto 
const obj = {}
obj.falar = function () {return 'opa'}
console.log(obj.falar())

//passar função como parametro 
function run(fun) {
    fun()
}
run(function (){console.log('Executando ...')})

//uma função pode retornar/conter função
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
} 
soma(2, 3)(4)  // ou soma(2,3,4)