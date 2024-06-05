const precoGasolina = 5.79;
const precoEtanol = 6.66;
const tipoDeCombustivel = 'Etanol'
const kmPorLitros = 10;
const distanciaEmKm = 100;



if (tipoDeCombustivel === 'Gasolina'){
    const litrosConsumidos = distanciaEmKm / kmPorLitros;
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
} else if (tipoDeCombustivel === 'Etanol'){
    const litrosConsumidos = distanciaEmKm / kmPorLitros;
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    console.log('@@@ Informe um tipo de combustivel valido @@@')
}