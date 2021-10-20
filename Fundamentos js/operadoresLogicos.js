/* Operadores : lógicos
 Tabela verdade
Com 'e' todos os operadores tem que ser verdadeiros para que a resposta seja verdadeira
v e v -> v
v e f -> f
f e ? -> f

Não precisa analizar o segundo operando No 'ou'
v ou ? -> v
f ou v -> v
f ou f -> f


v xor v -> f
v xor f -> v
f xor v -> v
f xor f -> f

!v ->f
!f -> v

veja os exemplos na pratica abaixo. Caso receba um aluguel poderá pagar as contas. Caso receba os 2 alugueis poderá pagar as contas e comprar um pc novo. Caso receba um dos alugueis poderá comprar doces. Poderá comprar um pc usado se o aluguel 1 for diferente do aluguel2. Se não comprardoces manterá a dieta.
*/

function dispesas (aluguel1, aluguel2) {
    const pagarContas = aluguel1 || aluguel2
    const comprarDoces = aluguel1 || aluguel2
    const comprarPcNovo = aluguel1 && aluguel2
    const  comprarPcUsado = aluguel1 != aluguel2 //aluguel 1 diferente do aluguel 2
    const manterDieta = !comprarDoces

    return{pagarContas, comprarDoces, comprarPcNovo, comprarPcUsado, manterDieta}
    }
    console.log(dispesas(true,true))
    console.log(dispesas(false, true))
    console.log(dispesas(true, false))
    console.log(dispesas(false, false))

    

