const escola = [{
    nome:'Turma 1',
    alunos :[{
        nome :'Alex',
        nota: 10
    },{
        nome:'July',
        nota:9.7
    }]
},{
    nome: 'Turma 2',
    alunos :[{
        nome:'Nutsha',
        nota :10
    },{
        nome :'Rimena',
        nota :9.6
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

console.log([].concat([ 10, 9.7 ], [ 10, 9.6 ]))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)


