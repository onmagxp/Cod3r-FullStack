function adicionarNome(nomes, novoNome) {
    nomes.push(novoNome)
    return nomes
}

let listaDeNomes = ['Maria', 'João', 'Ana']
adicionarNome (listaDeNomes, 'Pedro')
adicionarNome (listaDeNomes, 'Carla')
console.log(listaDeNomes)