// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a ** b)
}

imprimirSoma(10, 5)
imprimirSoma(10)
imprimirSoma(20, 2)
imprimirSoma()
imprimirSoma(9, 7, 6, 50, 89)

// Função com retorno
function soma(a, b = 5) {
    return a + b
}

console.log(soma(5, 8))
console.log(soma(1))
console.log(soma())
