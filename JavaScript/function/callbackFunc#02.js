const notas = [8.1, 6.7, 3.5, 9.3, 7.4, 2.3, 10]

// Sem callback
const notasBaixas1 = []
for (let nota in notas) {
    if (notas [nota] < 7) {
        notasBaixas1.push(notas[nota])
    }
}

console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter(nota => nota < 7)
console.log(notasBaixas2)

