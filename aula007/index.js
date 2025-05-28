/*
Regras basicas constantes

1-Não podemos criar constantes com palavras reservadas
2-Constantes precisam ter nomes signficativos
3-Não pode começar o nome de uma constante com um número
4-Não podem conter espaços ou traços
5-Utilizamos camelCase
6-Case-Sensitive 
7-Não pode modificar o valor de uma constante
8-Não utilize var,utilize Const
*/


//String = text /number = numero
const primeiroNumero = 5;//number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;

console.log('-----------------Exibindo dados-----------------');
console.log(typeof primeiroNumero)
console.log(resultadoDuplicado)
console.log(resultado)
console.log(resultadoTriplicado)
console.log()

resultadoTriplicado =resultadoTriplicado + 5

console.log('-----------------Exibindo dados-----------------');
console.log(resultadoDuplicado)
console.log(resultado)
console.log(resultadoTriplicado)