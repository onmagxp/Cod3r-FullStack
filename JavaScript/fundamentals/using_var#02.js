var numero = 1 // numero é global
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
