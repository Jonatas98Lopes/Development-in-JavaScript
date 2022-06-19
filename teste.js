/*
//var y = 0; 
/* testando linha de comentarios em Java Script
em varias linhas 
Declaracao de variavel abaixo
var preco = 2;
var desconto = 0.2;
const PRECO = 2;
var total = PRECO - desconto;
Funcao definida em Java Script.
function soma(a, b) {
    console.log(a + b); // print
    return a + b
}
soma(3, 4); */

//console.log("Hello World!");
function returnEvenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i ++){
      if(array[i] % 2 === 0) {
        evenNums.push(array[i]);
      }    
    }
  console.log(evenNums);
}
let array = [1,2,3,4,5,6,7,8,9,10]
returnEvenValues(array);