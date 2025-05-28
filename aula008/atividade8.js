/*
 Questão:
 Aparecer Luiz Otávio Miranda tem 30 anos, pesa 84 kg,
 tem 1.80 de altura e seu IMC é de 25.92592...
 Agora com seus dados: nome, altura, peso.
*/

// Constantes (valores fixos)
const nome = 'Luiz Felipe';
const sobreNome = 'Farias Braz da Silva';

// Variáveis (podem mudar)
let idade = 19;
let pesoEmKg = 65.0;
let alturaEmM = 1.60;

// Cálculo do IMC
const calculandoImc = pesoEmKg / (alturaEmM * alturaEmM);

// Exibição com concatenação tradicional
console.log(nome + ' ' + sobreNome + ' tem ' + idade + ' anos, ' + pesoEmKg + ' kg e ' + alturaEmM.toFixed(2) + 'm de altura.');
console.log('Seu IMC é de ' + calculandoImc.toFixed(2));

console.log('-----------------Exibindo dados com template strings-----------------');

// Exibição com template strings (mais moderno)
console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${pesoEmKg.toFixed(2)} kg e tem ${alturaEmM.toFixed(2)}m de altura.`);
console.log(`Seu IMC é de ${calculandoImc.toFixed(2)}.`);
