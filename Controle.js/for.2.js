/*const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (i in notas) {
    console.log(i, notas[i])
}*/

const pessoa = {
    nome : 'Alexandre',
    sobrenome: 'Gregores',
    idade : 41 ,
    peso: 75,
}
 for (atributo in pessoa) {
     console.log('${atributo} = ${pessoa[atributo]}')
 }
