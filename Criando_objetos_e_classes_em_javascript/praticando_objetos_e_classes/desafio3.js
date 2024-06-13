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

    classificarImc(){
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return 'Abaixo do peso!';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso Normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso';
        } else {
            return 'Obesidade grave';
        }
    }
}

const jose = new Pessoas('José', 70, 1.75);
console.log(jose.calcularImc());
console.log(jose.classificarImc());
const matheus = new Pessoas('Matheus', 80, 1.78);
console.log(matheus.calcularImc());
console.log(matheus.classificarImc());
const marcos = new Pessoas('Marcos', 75, 1.79);
console.log(marcos.calcularImc());
console.log(marcos.classificarImc());