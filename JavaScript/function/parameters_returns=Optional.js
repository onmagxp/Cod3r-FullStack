function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}
area(20, 30)
console.log(area(2, 5))
console.log(area(2, 5, 6, 9, 10, 73))