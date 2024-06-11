const preco = 100;
/* 
    1 - À VISTA DEBITO, RECEBE 10% DE DESCONTO
    2 - À VISTA NO DINHEIRO OU PIX, RECEBE 15% DE DESCONTO
    3 - EM DUAS VEZES, PREÇO NORMAL DE ETIQUETA SEM JUROS
    4 - ACIMA DE DUAS VEZES, PREÇO NORMAL DE ETIQUETA MAIS JUROS DE 10%
*/
const tipoDePagamento = 1;

if (tipoDePagamento === 1) {
    const dezPorcentoDeDesconto = preco - (preco * (10 / 100));
    console.log('o valor a pagar é de R$'+dezPorcentoDeDesconto);
} else if (tipoDePagamento === 2) {
    const quizePorcentoDeDesconto = preco - (preco * (15 / 100));
    console.log('O valor a pagar é de R$'+quizePorcentoDeDesconto);
} else if (tipoDePagamento === 3) {
    console.log('O valor a ser pago é de R$'+preco);
} else if (tipoDePagamento === 4) {
    const dezPorcentoDeJuros = preco + (preco * (10 / 100));
    console.log('O valor a ser pago é de R$'+dezPorcentoDeJuros);
} else {
    console.log('Digite um numero valido!')
}