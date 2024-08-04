// `var` e `let` tem a função. Mas, `var` já não costuma ser utilizado, nas versões mais atuais do ECMAScript foi criado o `let` que o substituiu.

var a = 3
var b = 5
console.log(a, b)

a = 30
b = 50
console.log(a, b)



let c = 10
let d = 20
console.log(c, d)

c = 100
d = 200
console.log(c, d)



const e = 4
const f = 6
console.log(e, f)

// e = 40   Vai dar erro, pois por ser uma constante não vai ser possível atribuir um novo valor.
// f = 60   Vai dar erro, pois por ser uma constante não vai ser possível atribuir um novo valor. 