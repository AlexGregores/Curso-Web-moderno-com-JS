// function declaration OBS: forma mais comum
//  unica opção que pode chamar a função antes de declarar
// console.log(soma(2,4))

function soma (x,y) {
    return x + y
}
console.log(soma(2,4))

// function expression OBS: forma mais comum
const sub = function(x,y) {
    return x - y
}
console.log(sub(10,3))
//named function expression obs: forma pouco usada função nomeada
const mult = function mult(x,y) {
    return x * y
}

 
