const valores = [9.0, 7.2, 8.9, 10, 7] // array é representado por []
console.log(valores[4] ,valores[0])// mostrando o caracter do array
console.log(valores[2])

valores[1] = 7 //alterando o valor do caracter do array
console.log(valores)

console.log(valores.length)//mostra a quantidade de caracter no array

// não misturar os dados // fazer um array para cada coisa// criar array com tipo de dados homogenios

valores.push({id: 3},false, null, "teste")//adicionar 
console.log(valores)

console.log(valores.pop())

delete valores[0]//excluir
console.log(valores)

console.log(typeof valores)



