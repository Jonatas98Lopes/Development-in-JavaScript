/*
1. Crie uma função que recebe o array alunos e um número que irá
representar a média final;
2. Percorra o array e procure um novo array auxiliar apenas com os 
alunos cujas notas são maiores ou iguais à média final;
3. Utilize a técnica "object destructuring" para manipular as 
propriedades desejadas de cada aluno.*/
function alunosAprovados(array, num){
    let array2 = []
  for(let i = 0; i < array.length; i++){
    const {nome, nota} = array[i]
    if(nota >= num){
       array2.push(nome); 
    } 
  }
  return array2
}

let alunos = [{
    nome:'Jonatas',
    nota: 9,
    turma: '1CC'
},
{
    nome:'Cintia',
    nota:  7,
    turma:'4EC'

},
{
    nome: 'Fernando',
    nota: 5,
    turma: '2ADS'
},
{
    nome: 'Natanael',
    nota: 8,
    turma: '4ADS'
},
{
    nome: 'Maria',
    nota: 7.5,
    turma: '2ADM'
}
];
let x = alunosAprovados(alunos,8)
console.log(x)