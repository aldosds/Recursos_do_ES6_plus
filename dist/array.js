"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];

// for
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}

// forEach
// redesSociais.forEach(function(nomeDaRedeSocial) {
//     console.log(`Eu tenho perfil na rede social: ${nomeDaRedeSocial}`);
// });

// Adicionado indice
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});

// Map
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

// const alunos2 = alunos.map(function(itemAtual) {
//     itemAtual = {
//         nome: itemAtual,
//         curso: 'Frontend'
//     }
//     return itemAtual;
// })

// console.log(alunos2);

// const numeros = [1, 2, 3, 4, 5];
// const dobroDosNumeros = numeros.map(function(numeroAtual) {
//     numeroAtual = numeroAtual * 2;
//     return numeroAtual;
// })

//return
// Reduzindo linha de código na utilização do return
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(alunos2);

// const numeros = [1, 2, 3, 4, 5];
// const dobroDosNumeros = numeros.map(function(numeroAtual) {
//     return numeroAtual * 2;
// })

// console.log(dobroDosNumeros);

//find 
//Retorna um item do array
// Utilizando o find para fazer busca
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula'; // true ou false
});

console.log(paula);

//findIndex
//Retorna o index do array
// Trabalhar com o indice com findIndex
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula'; // true ou false
});

console.log(indiceDaPaula);

//every
// Adicionando um item no final dos itens com push
alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});

// Fazendo uma verificação de todos os itens no Array com every
var todosAlunosSaoDeFronted = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosAlunosSaoDeFronted);

//some
// Verificar se tem algum item desejado com o some
// const existeAlgumAlunoDeBackend = alunos2.some(function(item) {
//     return item.curso === 'Backend';
// });

// Verificando mais de um item Backend e Frontend
var existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend';
});
console.log(existeAlgumAlunoDeBackend);

//filter
// Filtrando itens de Arrays com o filter
// const alunosDeBackend = alunos2.filter(function(item) {
//     return item.curso === 'Backend';
// })

// Melhor forma de executar o filtro é criando uma função primeiro e logo após o filtro
function filtraAlunosDeBackend(aluno) {
  return aluno.curso === 'Backend';
}
var alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);
console.log(alunosDeBackend);

//reduce
// Reduzindo um conteúdo de um Array em um único valor com reduce
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);

// Utilizando um for no lugar do reduce
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);

// Reduzindo os itens do Array em uma única variável com o reduce
var nomeDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomeDosAlunos);