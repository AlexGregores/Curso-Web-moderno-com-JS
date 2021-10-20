function teste1(num) {
    if(num >=7)
    console.log(num) // o js interpreta apenas a primeira sentença com if

    console.log('Final') // a segunda seguencia é ignorado pelo if por isso a mensagem aparece no console mesmo sendo numero < 7
}
teste1(6)
teste1(9)

// não utilize o ; (ponto e virgula) em uma estrutura if

//function teste2(num) {
//    if(num > 7) ;      CUIDADO!


