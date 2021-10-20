console.log(typeof Array, typeof new Array, typeof[])

let aprovados = new Array('Bia', 'Alex', 'July', 'Dude')
console.log(aprovados)

aprovados = ['Bia', 'Alex', 'July', 'Dude']
console.log(aprovados[0]) //a cessando elementos pelo indice a partir do zero
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])


aprovados[4] = 'Diana' //add element
aprovados.push('Chandra') // add element
console.log(aprovados[4])
aprovados[9] = 'Padilha'
console.log(aprovados.length)//mostra quantidade de elementos
console.log(aprovados[8]=== undefined)

console.log(aprovados)
aprovados.sort() //ordena os elementos
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) //slice remove e add elemento //removendo elemento
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') // removendo e add elemento
console.log(aprovados)

