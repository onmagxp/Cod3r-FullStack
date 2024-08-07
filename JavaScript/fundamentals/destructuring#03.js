// novo recurso do ES2015

//destructuring à partir de um Object.

function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({min: 950}))
console.log(rand({}))
console.log(rand()) TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))