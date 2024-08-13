function classificarNota(nota) {
    if (nota >= 9) {
        return 'Excelente!'
    } else if (nota >= 7) {
        return 'Bom!'
    } else if (nota >= 5) {
        return 'Regular!'
    } else {
        return 'Reprovado!!!'
    }
}

console.log(classificarNota(9.4))
console.log(classificarNota(7.3))
console.log(classificarNota(5))
console.log(classificarNota(3.1))
console.log(classificarNota(8.5))
console.log(classificarNota(6.9))