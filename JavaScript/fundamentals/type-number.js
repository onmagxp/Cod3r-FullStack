const peso1 = 30.0
const peso2 = Number('50.0')

console.log("Peso 1: " + peso1)
console.log("Peso 2: " + peso2)
console.log(typeof peso2)
console.log(Number.isInteger(peso1) + " É um número inteiro") 
console.log(Number.isInteger(peso2) + " É um número inteiro")

const avaliacao1 = 9.871
const avaliacao2 = 6.871

console.log("Avaliação 1: " + avaliacao1)
console.log("Avaliação 2: " + avaliacao2)

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log("Total: " + total)
console.log("Média: " + media)

console.log(total.toFixed(2))
console.log(media.toString(2)) // `to String(2)´ para transformar em binário.
console.log(typeof media)



/*acima temos dois tipos de number: `number´: É o tipo do dado, exemplo: number, string, null, boolean, undefined, etc.
`Number´: que é uma função. No caso é utilizado para transformar uma string para number.*/

 
//  Number.isInteger é uma maneira de checar se um número é inteiro, sem partes decimais.

// toFixed(): Formata um número usando notação de ponto fixo.
// Exemplo: `let n1 = 1545.6; n1.toFixed(2); // '1545.60'`

// toFixed() com replace(): Substitui o ponto decimal por uma vírgula.
// Exemplo: `let n1 = 1545.6; n1.toFixed(2).replace('.', ','); // '1545,60'`

// toLocaleString(): Formata o número de acordo com a localidade especificada.
// Exemplo: `let n1 = 1545.6; n1.toLocaleString(); // Pode retornar '1,545.6' ou '1.545,6' dependendo da localidade`
