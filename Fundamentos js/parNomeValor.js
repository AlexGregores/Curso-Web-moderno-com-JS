//par/nome/valor
const saudacao = 'olá' //contexto léxico 1

function exec() {
    const saudacao = 'falaaa' //contexto léxico2
    return saudacao 
}

//Objetos são grupos alinhados de pares nome valor
const cliente = {
    nome:'Alexandre',
    idade :41,
    peso: 70 ,
    altura : 1.70,
    endereco : {
        logradouro: 'Rua Edimburgo',
        numero: 7,
    }

}
console.log(saudacao)
console.log(cliente)
console.log(exec())

    
