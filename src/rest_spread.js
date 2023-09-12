function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
    
    //console.log(arguments);
    //return a + b;
}

console.log(somar(10, 20));

//Rest
//Somando com o rest
//Os "..." tem que estar antes do argumento para iniciar o rest
function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0);
    return soma;
}

console.log(somarComRest(10, 20, 30));

//Spread
const numeros = [1,2,3,4];

console.log(...numeros);

// Unindo os Arrays
const numerosImpares = ["um", "tres", "cinco"];
const numerosPares = ["dois", "quatro", "seis"];

// const numerosUnidos = numerosImpares.concat(numerosPares);

//espalhando para um novo array
const numerosUnidos = [...numerosImpares, ...numerosPares];

console.log(numerosUnidos);

//Espalhando a propriedade de um objeto
const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    //Pegando todo conteudo da Julia e sobreescrevendo o motor
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna);

// Desestruturação de Objetos
//const motorDoCarroDaAna = carroDaAna.motor;
const {motor: motorDoCarroDaAna} = carroDaAna;
const {motor: motorDoCarroDaJulia} = carroDaJulia;

console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia);

// Para que os outros numeros apareção, utilizaremos o rest "..."
// OBS: É retornado um Array dos números que faltão
const [item1, item2, item3, ...outrosNumeros] = numerosUnidos;

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosNumeros);