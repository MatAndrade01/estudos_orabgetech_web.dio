const n1 = 7;
const n2 = 7;
const n3 = 7;

let media = (n1 + n2 + n3) / 3;

console.log(media)

if (media > 7) {
    console.log('Passou de semestre');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Reprovado!!');
}