//novo recurso do ES2015

const pessoa = {
    nome :'Alexandre',
    idade : 41,
    endereco : {
        logradouro: 'Rua abc',
        numero :7 ,
    }


}
const {nome, idade} = pessoa // pedindo para o js tirar de dentro do objeto(pessoa) os atributos(nome e idade)
console.log(nome,idade)

const {nome : n , idade : i} = pessoa
console.log(n,i)

