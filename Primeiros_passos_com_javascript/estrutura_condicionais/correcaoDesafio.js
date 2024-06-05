const precoGasolina = 5.79;
const precoEtanol = 6.66;
const tipoDeCombustivel = 'Etanol'
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoDeCombustivel === 'Gasolina'){
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
} else if (tipoDeCombustivel === 'Etanol'){
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    console.log('@@@ Informe um tipo de combustivel valido @@@')
}