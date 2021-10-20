//exemplo de uso do switch
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {   //  math.floor arredondar para baixo a nota 
        case 10:
        case 9:
            console.log('Medalha de ouro') 
            break   
      //  math.floor arredondar para baixo a nota 
    
        case 0:
            console.log('desclassificado') 
            break    // não deixa o js executar o proximo case (comportamento padrão do js) desviu de fluxo
        case 2:
          console.log('Reprovado')
          break
        case 5 : case 6 : case 7 :
            console.log('Em analise')
            break
        default : // não é obrigado colocar o default no final, porém tbm necessitará do break
        console.log('Nota inválida')    
        } 
               
}
imprimirResultado(10)
imprimirResultado(9)
imprimirResultado(1) 
imprimirResultado(2)
imprimirResultado(0)
imprimirResultado(5.5)
imprimirResultado(9.5)