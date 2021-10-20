//uso do arguments
function soma() {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(2.2,3.6,9.0))

console.log(soma(2,2.4,6., 'teste'))
console.log(soma('a', 'b' , 'c'))
