const lutadores = ['Axe Murder', 'Spider', 'Minotauro', 'Gracy']
lutadores.pop() // retira o ultimo elemento
console.log(lutadores)

lutadores.push('Jose Aldo') // add elemento no final
console.log(lutadores)

lutadores.shift()// remove primeiro elemento da lista
console.log(lutadores)

lutadores.unshift('BJ Penn')// add elemento no inicio 
console.log(lutadores)

//splice pode add e remover elementos

// add
lutadores.splice(2,0,'Machida', 'Royce Gracie') //a dd indice 2, remove 0 elementos, add Machida e Royce Gracie
console.log(lutadores)

// remover
lutadores.splice(3,1)// a partir do indice 3 remover 1 elemento
console.log(lutadores)

const algunsLutadores = lutadores.splice(3)// novo array 3 primeiros elementos
console.log(lutadores)

const algunsLutadores2 = lutadores.splice(1,4)
console.log(lutadores)

