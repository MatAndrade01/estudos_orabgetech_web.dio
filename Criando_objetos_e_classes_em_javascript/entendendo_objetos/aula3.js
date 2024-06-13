const pessoa = {
    nome: 'Matheus Emanuel Andrade',
    idade: 22,
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    },
};

pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}`)
}

pessoa.descrever();