function escrevaMeuNome(nome) {
    return nome;
}

function validarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('Matheus') + ' é Maior de idade');
    } else {
        console.log(escrevaMeuNome('Matheus') + ' é Menor de idade');
    }
}

validarIdade(17);