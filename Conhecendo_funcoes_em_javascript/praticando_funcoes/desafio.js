/* 
    1 - À VISTA DEBITO, RECEBE 10% DE DESCONTO
    2 - À VISTA NO DINHEIRO OU PIX, RECEBE 15% DE DESCONTO
    3 - EM DUAS VEZES, PREÇO NORMAL DE ETIQUETA SEM JUROS
    4 - ACIMA DE DUAS VEZES, PREÇO NORMAL DE ETIQUETA MAIS JUROS DE 10%
*/

function aplicarDesconto (valor, desconto) {
    return (valor - (valor * (desconto / 100)))
}

function aplicarJuros (valor, juros) {
    return (valor + (valor * (juros / 100)))
}

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
        console.log(precoEtiqueta);
} else if (formaDePagamento === 4) {
    console.log(aplicarJuros(precoEtiqueta, 10));
} else {
    console.log('Digite um numero valido!')
}
