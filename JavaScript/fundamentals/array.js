const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores)
console.log(valores[0], valores[3])
console.log(valores.length)

valores[4] = 10.5
console.log(valores[4])
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)

/*
 .push() 
 O método .push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
 Exemplo: valores.push({id: 3}, false, null, 'teste')
 Adiciona os elementos {id: 3}, false, null, e 'teste' ao final do array valores.
*/

valores.push({id: 3}, false, null, 'teste')
console.log(valores)  // [ <1 empty item>, 8.9, 6.3, 9.2, 10.5, {id: 3}, false, null, {id: 3}, false, null, 'teste']

/*
 .pop()
 O método .pop() remove o último elemento de um array e retorna esse elemento.
 Exemplo: valores.pop()
 Remove o último elemento 'teste' do array valores e o retorna.
*/

console.log(valores.pop())  // 'teste'
console.log(valores)  // [ <1 empty item>, 8.9, 6.3, 9.2, 10.5, {id: 3}, false, null, {id: 3}, false, null ]

/*
 .length
 A propriedade .length retorna o número de elementos em um array.
 Exemplo:
 console.log(valores.length) antes de adicionar um novo elemento retorna 4.
 Após adicionar 10.5, retorna 5.
 Após adicionar mais elementos com .push(), retorna 9.
*/

console.log(valores.length)  // 11

/*
 Outras Observações:
 delete valores[0] remove o elemento na posição 0 do array valores, mas não altera o comprimento do array. O índice 0 fica como um item vazio (<1 empty item>).
 typeof valores retorna 'object' porque em JavaScript, arrays são objetos.
*/

delete valores[0]
console.log(valores)  // [ <1 empty item>, 8.9, 6.3, 9.2, 10.5, {id: 3}, false, null, {id: 3}, false, null ]
console.log(typeof valores)  // 'object'