//estrategia 1 para gerar valores padrão 
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(),soma1(3), soma1(2,2,2) )

// estratégia 2 , 3, 4 para gerar parametros padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ?  b: 1
    c = isNaN(c) ? 1 : c
    return  a + b + c
}
console.log(soma2(), soma2(3), soma2(4,3,2))

// valor padrao do ES2015   OBS : Forma mais adequada e mais faciul
function soma3(a = 1 , b = 1 , c = 1) {
    return a + b + c
}
console.log(soma3())
console.log(soma3(2))
console.log(soma3(2, 2, 2))
console.log(soma3(0,0,0))

