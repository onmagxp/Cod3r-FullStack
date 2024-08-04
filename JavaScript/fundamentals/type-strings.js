const escola = "Cod3r"

// O método charAt retorna o caractere na posição especificada (index).
console.log(escola.charAt(4))
// Retorna 'r' porque é o caractere na posição 4 (index 0: C, 1: o, 2: d, 3: 3, 4: r)

// Se o índice estiver fora do intervalo, retorna uma string vazia.
console.log(escola.charAt(5))
// Retorna '' (string vazia), pois não há caractere na posição 5

// O método charCodeAt retorna o valor Unicode do caractere na posição especificada.
console.log(escola.charCodeAt(3))
// Retorna 51, que é o valor Unicode do caractere '3'

// O método indexOf retorna o índice da primeira ocorrência do caractere especificado na string.
console.log(escola.indexOf('3'))
// Retorna 3, que é a posição do caractere '3' na string

// O método substring retorna uma parte da string entre os índices de início e fim especificados (não inclui o caractere no índice final).
console.log(escola.substring(1))
// Retorna 'od3r', começando do índice 1 até o final
console.log(escola.substring(0, 3))
// Retorna 'Cod', começando do índice 0 até o índice 3 (não incluindo o índice 3)

// O método concat concatena (junta) duas ou mais strings.
console.log('Escola '.concat(escola).concat('!'))
// Retorna 'Escola Cod3r!', concatenando as strings

// O método replace substitui a primeira ocorrência do valor especificado por outro valor.
console.log(escola.replace(3, 'e'))
// Retorna 'Coder', substituindo o '3' por 'e'

// O método split divide a string em um array de substrings com base no delimitador especificado.
console.log('Ana, Maria, Pedro, Mario'.split(','))
// Retorna ['Ana', ' Maria', ' Pedro', ' Mario'], dividindo a string pelos delimitadores ','
