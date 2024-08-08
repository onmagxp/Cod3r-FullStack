function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log ('Aprovado com a nota: ' + nota)
    }
}

soBoaNoticia(10)
soBoaNoticia(7)
soBoaNoticia(5.1)

function seForVerdade(idade) {
    return idade >= 18 ? "Maior de Idade" : "Menor de Idade"
}

console.log(seForVerdade(20))
console.log(seForVerdade(15))



function seForVerdade(idade) {
    return idade >= 18 ? "Maior de Idade" : "Menor de Idade";
}

console.log(seForVerdade(20));  
console.log(seForVerdade(15));
console.log(seForVerdade(null));
console.log(seForVerdade(undefined));
console.log(seForVerdade(NaN));
console.log(seForVerdade());
console.log(seForVerdade(''));
console.log(seForVerdade(0));
console.log(seForVerdade(-1));
console.log(seForVerdade(' '));
console.log(seForVerdade('?'));
console.log(seForVerdade([]));
console.log(seForVerdade({}));



