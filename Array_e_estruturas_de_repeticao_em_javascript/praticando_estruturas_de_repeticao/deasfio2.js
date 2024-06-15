const lista = [];

for (i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        lista.push(i);
        
    } 
}

console.log(lista);



const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i < numeros.length; i++) {
    const numero = numeros[i]
    if (numero % 2 === 0) {
        console.log(numero);
    }
}