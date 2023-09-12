"use strict";

var _this = void 0;
// const minhaFuncao = () => {
//     console.log("Diz olá");
// }

// minhaFuncao();

//Outra forma de utilizar o arrow function
// const minhaFuncao = () => {
//     return "Diz olá";
// }

// Mais um forma de utilizar o arrow function
var minhaFuncao = function minhaFuncao() {
  return "Diz olá";
};
console.log(minhaFuncao());

// Arrow function com objeto
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: 'Ka',
    fabricante: 'Ford'
  };
};
console.log(retornaUmCarro());

//As Arrow Function elas têm um escopo de função diferente das demais
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    console.log(this);
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    console.log(_this);
    _this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);