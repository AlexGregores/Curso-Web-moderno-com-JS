Number.prototype.entre = function (inicio,fim) {
    return this >= inicio && this <=fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9,10)) 
    console.log('Medalha de ouro')
    else if (nota.entre(7, 8))
    console.log('Medalha de prata')
    else if (nota.entre(4,6))
    console.log('Medalha de bronze')
    else
    console.log('Desclassificado')
}
imprimirResultado(3)
imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(9)
imprimirResultado(5)