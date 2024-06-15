

const {gets, print} = require('./desafio1-funcoes-auxiliares1');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);