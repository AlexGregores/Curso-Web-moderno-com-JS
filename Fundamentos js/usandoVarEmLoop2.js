var funcs  = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
})
}
funcs [2]()
funcs [8]()
//obs: Por var não ter escopo de função nesse caso gera um erro e não imprime o esperado.
// ***ver o exemplo com let no arquivo = usandoLetEmLoop2
