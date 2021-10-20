function tratarErroELancar(erro) {
    throw new Error('Error....') // throw true
                                 // throw 'mensagem'
                                // throw 7    etc.
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() +'!!!') 
    }
    catch (e) {
tratarErroELancar(e)
    }

}
const obj = {nome : 'Alexandre'} // note que ao colocar name invés de nome como foi declarado acima acaba gerando um erro.
imprimirNomeGritado(obj)
