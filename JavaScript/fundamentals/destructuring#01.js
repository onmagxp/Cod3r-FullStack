// novo recurso do ES2015

//destructuring à partir de um Object.

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua do Bosque',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, pessoa)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, cor = true } = pessoa
console.log(sobrenome, cor)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)