//usando a estrutura if
function soBoaNoticia(nota) {
    if (nota >=7) {
        console.log('Parabêns aprovado' + ' '+ 'nota'+ nota )
    }
}
soBoaNoticia(9)
soBoaNoticia(6) // não aparece pois a nota é menor que 7 conforme declarado na função

// outro exemplo

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('È verdade ...' + valor)
    }
} 
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo('')
seForVerdadeEuFalo({})
seForVerdadeEuFalo([])


