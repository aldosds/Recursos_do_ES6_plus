//Setando item
let meuMap = new Map();
meuMap.set("nome", "aldo");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

// Recuperando um item com o Get
const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

//Verificando uma chave no map
console.log(meuMap.has("nome"));

//Função para limpar o map
//meuMap.clear();

console.log(meuMap.size);

for(let chave of meuMap.keys()) {
    console.log(chave);
}

for(let valor of meuMap.values()) {
    console.log(valor);
}

for(let entrada of meuMap.entries()) {
    console.log(entrada);
}

for(let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap);

// CPF
const cpfs = new Set();

cpfs.add('987234234');
cpfs.add('887234238');
cpfs.add('587234235');

console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
    console.log(valor);
})

//Listagem de itens unicos
const array = ['Aldo', 'José', 'Maria', 'Luana', 'Luana', 'Aldo'];

//Setamndo com Array
const arrayComoSet = new Set([...array]);

console.log(arrayComoSet);

const arraySemItensDuplicados = [...arrayComoSet];

console.log(arraySemItensDuplicados);