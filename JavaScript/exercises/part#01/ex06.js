function imprimirParesOuImpares(n) {
    // Função auxiliar para verificar se um número é par
    function ehPar(numero) {
        return numero % 2 === 0
    }

    for (let i = 1; i <= n; i++) { // Loop de 1 até n
        if (ehPar(i)) { // Verifica se o número é par
            console.log(`${i} é Par`)
        } else { // Caso contrário, é ímpar
            console.log(`${i} é Ímpar`)
        }
    }
}

imprimirParesOuImpares(13)