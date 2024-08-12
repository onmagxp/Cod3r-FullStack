function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != 50) {
    opcao = getInteiroAleatorioEntre(50, 60)
    console.log(`Opção escolhida foi ${opcao}`)
}

console.log('Até a próxima!')
