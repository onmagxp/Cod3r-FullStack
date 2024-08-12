function classificarNota(nota) {
    if (nota >= 9) {
        return 'Excelente'
    } else if (nota >= 7) {
        return 'Bom'
    }   else if (nota >= 5) {
        return 'Regular'
    } else {
        return 'Reprovado'
    }
}

console.log(classificarNota(10))
console.log(classificarNota(8))
console.log(classificarNota(6))
console.log(classificarNota(2))
console.log(classificarNota(5))