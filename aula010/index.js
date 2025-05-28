/*

Operadores aritmeticos
+ adição /concatenação
- subtração 
* mutiplicação
** pontencialização
/ Divisão 
% Resto da divisão

Precendencia
1-parenteses
2-potenciação **
3- mutiplicação  * ,divisão / e resto da divisão %
4- soma e subtração

*/

//incremento ++ e Decremento --
let contador = 1;
contador++; //2 -->faz a conta Primeiro
contador++; //3 
console.log(contador)

let contadorDois = 1;
++contadorDois; //2-->faz a conta Depois
++contadorDois; //3
console.log(contadorDois)

let contadorTres = 0;
contadorTres += 2;
contadorTres += 4;//  contador = contador + 2
contadorTres += 8;
console.log(contadorTres)

const num1 = parseInt(5);// Passa a ser numero inteiro mesmo que esteja escrito como string
const num2 = Number(2);// Passa a ser numero mesmo que esteja escrito como string
const num3= parseFloat(10);// Passa a ser numero float- com pontos mesmo que esteja escrito como string

console.log(num1+ num2 * num3)