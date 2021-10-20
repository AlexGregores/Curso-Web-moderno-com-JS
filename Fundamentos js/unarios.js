// unário  = operador com 1 operando
let number1 = 1
let number2 = 2
number1++ // ou  ++ numebr1 OBS: veja a diferença no exeplo abaixo
console.log(number1)
number1-- // ou --number1 OBS: veja a diferença no exemplo abaixo
console.log(number1)

console.log(++number1 === number2--) // resultado será verdadeiro pois irá decrementar somente depois de comprar 2 ===2
console.log(++number1 === --number2) //resultado será falso pois somará 1 ou number1 , fara a comparação depois irásubtrair de number2 sendo 2 === 1

