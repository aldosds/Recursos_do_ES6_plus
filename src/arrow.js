// const minhaFuncao = () => {
//     console.log("Diz olá");
// }

// minhaFuncao();

//Outra forma de utilizar o arrow function
// const minhaFuncao = () => {
//     return "Diz olá";
// }

// Mais um forma de utilizar o arrow function
const minhaFuncao = () => "Diz olá";

console.log(minhaFuncao());

// Arrow function com objeto
const retornaUmCarro = () => ({
    modelo: 'Ka',
    fabricante: 'Ford'
})

console.log(retornaUmCarro());

//As Arrow Function elas têm um escopo de função diferente das demais
const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        console.log(this);
        this.velocidadeAtual += 10;
    },
    frear: () => {
        console.log(this);
        this.velocidadeAtual -= 10;
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual);