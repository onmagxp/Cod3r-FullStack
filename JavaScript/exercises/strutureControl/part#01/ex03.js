function  diaDaSemana(dia) {
    switch (dia ) {
        case 1:
            return 'Domingo'
        case 2:
            return 'Segunda-feira'
        case 3:
            return 'Terça-feira'
        case 4:
            return 'Quarta-feira'
        case 5:
            return 'Quinta-feira'
        case 6:
            return 'Sexta-feita'
        case 7:
            return 'Sábado'
        default:
            return 'Esse dia não existe!'
    }
}

console.log(diaDaSemana(5))
console.log(diaDaSemana(6))
console.log(diaDaSemana(1))
console.log(diaDaSemana(3))
console.log(diaDaSemana(7))
console.log(diaDaSemana(2))
console.log(diaDaSemana(10))
