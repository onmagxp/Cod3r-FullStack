// Desafio Troca de Valores de ´a´ para `b` e ´b´ para `a`.


{
    let a = 7;
    let b = 94;
    console.log(a);
    console.log(b);

    console.log('------------');
    let temp = a;
    a = b;
    b = temp;
    console.log(a);
    console.log(b);
}

console.log('------------');
console.log('------------');

{
    let a = 7;
    let b = 94;
    console.log(a);
    console.log(b);

    console.log('------------');

    a = a + 87;
    b = b - 87;
    console.log(a);
    console.log(b);
}

console.log('------------');
console.log('------------');

{
    let a = 7;
    let b = 94;
    console.log(a);
    console.log(b);

    console.log('------------');

    a += 87;
    b -= 87;
    console.log(a);
    console.log(b);
}