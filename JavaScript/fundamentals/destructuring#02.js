// novo recurso do ES2015

//destructuring à partir de um Array.

const a = [10]
console.log(a)

const [n1, n2, n3, , n5, n6, , n8 = 0] = [10, 20, 30, 40, 50, 60, 70, ]
console.log(n1, n2, n3, n5, n6, n8)

const [, [, nota]] = [[8, 9, 9.5], [5, 8, 10]]
console.log(nota)