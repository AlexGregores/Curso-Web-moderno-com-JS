const obj = {a:1, b:2, c:3, soma(){return a = b + c}}
console.log(JSON.stringify(obj)) //note que a função foi excluida do json 
//console.log(JSON.parse("{a:1,b:2,c:3,}")) formato invalido
//console.log(JSON.parse("{'a':1, 'b':2, 'c':3}")) formato invalido
console.log(JSON.parse('{"a":1, "b":2, "c":3}'))
