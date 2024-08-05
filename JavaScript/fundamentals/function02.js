// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
    console.log(imprimirSoma)
    console.log(typeof imprimirSoma)
}

imprimirSoma(2, 3)


// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(10, 15))
console.log(soma)
console.log(typeof soma)


// retorno implícito
const subtracao = (a, b) => a-b
console.log(subtracao(50, 400))
console.log(subtracao)
console.log(typeof subtracao)