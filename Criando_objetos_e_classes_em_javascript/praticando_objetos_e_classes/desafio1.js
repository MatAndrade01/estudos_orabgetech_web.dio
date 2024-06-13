class Carros {
    marca;
    cor;
    gastoPorKm;

    constructor(marca, cor, gastoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }
    calcularGastoDoPercurso(distanciaEmKm, precoCombustivel) {
        return (distanciaEmKm * this.gastoPorKm) * precoCombustivel;
    }
}

const uno = new Carros('Fiat', 'Prata', 1/12);
console.log(uno.calcularGastoDoPercurso(70, 5));
const palio = new Carros('Fiat', 'Preto', 1/10);
console.log(palio.calcularGastoDoPercurso(70, 5))
