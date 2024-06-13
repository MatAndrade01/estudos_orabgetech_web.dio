class Pessoas {
    nome;
    peso;
    altura

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return (this.peso / (this.altura * this.altura));
    }
}

const jose = new Pessoas('José', 70, 1.75);
console.log(jose.calcularImc());
const matheus = new Pessoas('Matheus', 80, 1.78);
console.log(matheus.calcularImc());
const marcos = new Pessoas('Marcos', 75, 1.79);
console.log(marcos.calcularImc());