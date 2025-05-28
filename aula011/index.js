alert('Nossa mensagem');

// Solicita dois números ao usuário
let numero1 = Number(prompt('Digite um número qualquer:'));
let numero2 = Number(prompt('Digite seu segundo número:'));

// Realiza operações aritméticas
let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let potenciacao = numero1 ** numero2;
let divisao = numero1 / numero2;
let resto = numero1 % numero2;

// Mostra os resultados com 2 casas decimais
alert(`O resultado da sua soma é: ${soma.toFixed(2)}`);
alert(`O resultado da sua subtração é: ${subtracao.toFixed(2)}`);
alert(`O resultado da sua multiplicação é: ${multiplicacao.toFixed(2)}`);
alert(`O resultado da sua potenciação é: ${potenciacao.toFixed(2)}`);
alert(`O resultado da sua divisão é: ${divisao.toFixed(2)}`);
alert(`O resto da divisão é: ${resto.toFixed(2)}`);

// Mostra no console também
console.log("Número 1:", numero1);
console.log("Número 2:", numero2);
console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Potenciação:", potenciacao);
console.log("Divisão:", divisao);
console.log("Resto da divisão:", resto);
