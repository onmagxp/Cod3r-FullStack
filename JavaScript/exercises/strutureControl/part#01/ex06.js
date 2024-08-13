function imprimirParesOuImpares(n) {
    function ehPar(numero) {
        return numero % 2 === 0
    }

    for (let i = 1; i <= n; i++) {
        if (ehPar(i)) {
            console.log(`${i} = Par.`)
        } else {
            console.log(`${i} = Ímpar.`)
        }
    }
}

imprimirParesOuImpares(9)