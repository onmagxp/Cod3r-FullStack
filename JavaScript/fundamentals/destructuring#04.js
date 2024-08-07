// novo recurso do ES2015

//destructuring à partir de um Array.

function rand([min = 0, max = 1000]) {
    if (min > max == true) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([100, 80]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand()) // TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))