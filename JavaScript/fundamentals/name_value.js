// par nome/valor
const saudacao = 'Opa' // contexto léxico

function exec() {
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal0',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)


