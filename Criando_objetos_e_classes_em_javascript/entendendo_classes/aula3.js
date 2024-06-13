class Pessoa {
    nome;
    idade;
    anoDeNasciento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNasciento = 2024 - idade
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function comparaPessoas(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} é mais velho que ${pessoa2.nome}`);
    } else if (pessoa2.idade > pessoa1.idade){
        console.log(`${pessoa2.nome} é mais velho que ${pessoa2.nome}`);
    } else {
        console.log(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade`);
    }
}

const matheus = new Pessoa('Matheus', 22);
const marcos = new Pessoa('Marcos', 22);

comparaPessoas(matheus, marcos)