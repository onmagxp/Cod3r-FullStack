const notas = [6.7, 7.5, 2.5, 9.2, 8.5]
for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    idade: 25,
    altura: '1.78',
    peso: '65kg'
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

