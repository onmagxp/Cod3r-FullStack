let valor
console.log(valor) // Output: undefined
// console.log(valor2)// Output: is not defined
/*
- `undefined` significa que uma variável foi declarada, mas ainda não foi atribuída a ela nenhum valor.
- É o valor padrão de uma variável recém-declarada.
*/


valor = null
console.log(valor)
// console.log(valor.toString()) // Erro!
// Não posso acessar nada a com o operador `.` quando estiver undefined ou null.

/*
- `null` é um valor atribuído explicitamente a uma variável para indicar que ela está vazia ou não aponta para nenhum objeto.
- É usado para representar a ausência intencional de qualquer valor ou objeto.
*/

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto.preco.toFixed(2))

produto.preco = undefined
console.log(!!produto.preco)
console.log(produto)
// evite atribuir undefined
// use `delete.produto.preco´ caso queira remover um valor.

produto.preco = null  // sem preço
console.log(!!produto.preco)
console.log(produto)