// function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//     this.nome = nomeDoPokemon;
//     this.tipo = tipoDoPokemon;
// }

// const pikachu = new Pokemon("Pikachu", "elétrico");

class Pokemon {
    // Com o # o recurso fica privado gerando um encapsulamento
    #hp = 100;

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }
    // Metodo
    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHp() {
        console.log(this.#hp);
    }
}

// Utilizando a Herança
class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Elétrico');
    }

    //Polimorfismo
    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`);
    }
}

// Extancias
const pikachuDoAsh = new Pikachu();
pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.hp = 5000;
console.log(pikachuDoAsh.hp);
pikachuDoAsh.atacar();
pikachuDoAsh.exibeHp();

const pikachu = new Pokemon('pikachu', 'elétrico');
pikachu.atacar('choque do trovão');

console.log(pikachu);
console.log(pikachuDoAsh);

console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);
