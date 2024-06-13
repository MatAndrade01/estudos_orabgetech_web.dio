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

const matheus = new Pessoa('Matheus', 22);
const marcos = new Pessoa('Marcos', 25);

console.log(matheus)