/* 
    1 - À VISTA DEBITO, RECEBE 10% DE DESCONTO
    2 - À VISTA NO DINHEIRO OU PIX, RECEBE 15% DE DESCONTO
    3 - EM DUAS VEZES, PREÇO NORMAL DE ETIQUETA SEM JUROS
    4 - ACIMA DE DUAS VEZES, PREÇO NORMAL DE ETIQUETA MAIS JUROS DE 10%
*/
const precoEtiqueta = 100;
const formaDePagamento = 1;

if (formaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.10));
} else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else if (formaDePagamento === 4) {
    console.log(precoEtiqueta + (precoEtiqueta * 0.10));
} else {
    console.log('Digite um numero valido!')
}