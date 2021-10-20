const quaseArray = {0: 'Rafael',1: 'Michelangelo',2: 'Donatello',3: 'Leonardo'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function(){return Object.values(this)},
    enumerable: false
})
console.log(quaseArray[0])

const meuArray = ['Rafael', 'Michelangelo', 'Donatello', 'Leonardo']
console.log(meuArray.toString(), meuArray)

