function imprimirNomesComForOf() {
    let listaDeNomes = ['Maria', 'João', 'Paulo', 'Miguel']; // Definida dentro da função
    console.log('Usando for...of:');
    for (let nome of listaDeNomes) {
        console.log(nome); // Imprime diretamente o elemento do array
    }
}

imprimirNomesComForOf()


function imprimirNomesComForClassico() {
    let listaDeNomes = ['Ana', 'Bia', 'Marcelo']
    console.log('Usando for Classico.')
    for(let nome of listaDeNomes) {
        console.log(nome)
    }
}

imprimirNomesComForClassico()