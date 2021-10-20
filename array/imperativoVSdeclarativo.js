const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'João', nota: 9.2}
]

//Imperativo
let total1= 0
for(let i = 0; i< alunos.length;i++){
    total1 += alunos[1].nota
}

console.log(total1/ alunos.length)

//declaration 
const getNota = aluno => aluno.nota
const soma = (total1, atual) => total + atual
const total2 = aluno.map(getNota).reduce(soma)
