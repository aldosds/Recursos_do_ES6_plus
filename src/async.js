// Uma execução como essa faz a inicialização dos demais servos atrasar por ser muito pesada
// function funcaoMuitoPesada() {
//     let execucoes = 0;
//     for(let i = 0; i < 1000000000; i++) {
//         execucoes++;
//     }
//     return execucoes;
// }

// console.log("inicio");
// console.log(funcaoMuitoPesada());
// console.log("fim");

// Melhorando com uma Promise
// Dessa forma inicializa e finaliza os processos e por último é que executa o muito pesado, executando o código de forma paralela e não em série.
function funcaoMuitoPesada() {
    let execucoes = 0;
    for(let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for(let i = 0; i < 1000000000; i++) {
            execucoes++;
        }
        resolve(execucoes);
    } catch (error) {
        reject('Deu erro na iteração dos números');
    }
});

// Criar parâmetros com uma Promise
//Abaixo tem a continuidade da Promise
const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`);
        }, 3000);
    })
}

// console.log("inicio");
// funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
// console.log("fim");

// Tornando uma função assíncrona e síncrona
async function execucaoPrincipal() {
    console.log("inicio");

    //await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));

    // Continuidade da Promise
    promiseComParametros('aldo@mail.com', 123456).then(resultado => {
        console.log(resultado);
    })

    // Outra forma de utilizar o “awit” trazendo o resultado
    try {
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado);
    } catch (e) {
        console.log(e);
    }

    console.log("fim");
}

execucaoPrincipal();

