let dobro = function(a) {
    return 2 * a
}

// função arrow
dobro = (a) => {
    return 2 * a
}


// return implicíto
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parâmento `_`
console.log(ola())