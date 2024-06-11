const peso = 70.5;
const altura = 1.75;
const IMC = peso / (altura * altura);

console.log(IMC);

if (IMC < 18.5) {
    console.log('Abaixo do peso!');
} else if (IMC >= 18.5 && IMC < 25) {
    console.log('Peso Normal');
} else if (IMC >= 25 && IMC > 30) {
    console.log('Acima do peso');
} else if (IMC >= 30 && IMC <= 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade grave')
}