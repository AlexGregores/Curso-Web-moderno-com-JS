{
    {
        {
          {
            var  sera  = 'será'
          }
        }
    }      
}  
console.log(sera)    // variável é visivel fora do bloco // em algumas linguagens a variável apareceria apenas dentro do bloco
// quando uma variável é criada fora de um escopo de função ela será visivel globalmente
//evitar criar variável no escopo global. 
// variável tem 2 escopos = variavel global ou variável dentro de um escopo de uma function
function teste () { 
    var local = 123 // var acessível apenas dentro do escopo da função
    console.log(local)
}
teste()
