class Pessoa {
    nome;
    idade;
    

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const matheus = new Pessoa();
matheus.nome = 'Matheus Emanuel Andade';
matheus.idade = 22;

const marcos = new Pessoa();
marcos.nome = 'Marcos José Silva';
marcos.idade = 25;

matheus.descrever();
marcos.descrever();