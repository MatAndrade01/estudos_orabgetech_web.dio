let precoCombustivel = 5.79;
let KmPercorridoPorLitro = 10;
let distanciaEmKm = 100;

let valoGastoDeCombustivel  = (distanciaEmKm / KmPercorridoPorLitro) * precoCombustivel;

console.log('O total gasto é de R$'+valoGastoDeCombustivel);