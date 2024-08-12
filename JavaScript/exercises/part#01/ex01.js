function verificarIdade(idade) {
    if (idade >= 18) {
        return 'De Maior!'
    } else {
        return 'De Menor!!!'
    }
}

console.log(verificarIdade(30))
console.log(verificarIdade(17))