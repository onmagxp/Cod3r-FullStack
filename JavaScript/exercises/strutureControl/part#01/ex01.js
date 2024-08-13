function verificarIdade(idade) {
    if (idade >= 18) {
        return 'Maior de Idade!'
    } else {
        return 'Menor de Idade!!!'
    }
}

console.log(verificarIdade(20))
console.log(verificarIdade(15))
console.log(verificarIdade(31))
console.log(verificarIdade(10))