// frutas.forEach(function (item, indice, array) {
//  console.log(item, indice);
// });

const aprovados = ['Agatha', 'Gizelma', 'José', 'Maria']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)