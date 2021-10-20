const imprimirResultado =  function (nota) {
    if (nota >=7) // por estar associado ao mesmo bloco não é necessario o uso das {}
    console.log('Aprovado')
    else          //não colocar ;(ponto e virgula) 
    console.log('Reprovado')
}
imprimirResultado(6)
imprimirResultado(9)
