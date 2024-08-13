function procurarNome(nomes, nomeProcurado) {
    console.log('Usando loop for')
    for ( let i = 0; i < nomes.length; i++) {
        if (nomes[i] === nomeProcurado) {
            return "Nome encontrado!"
        }
    }

    return "Nome não encontrado!"
}
let listaDeNomes = ['Maria', 'João', 'Paulo', 'Miguel']
console.log(procurarNome(listaDeNomes, 'Paulo'))


function procurarNome(nomes, nomeProcurado) {
    if (nomes.includes(nomeProcurado)) {
        return "Nome encontrado"
    } else {
        return "Nome não encontrado"
    }
}

let osNomes = ['Ana', 'Bia', 'Marcelo']
console.log(procurarNome(osNomes, 'Paulo'))
console.log(procurarNome(osNomes, 'Ana'))
