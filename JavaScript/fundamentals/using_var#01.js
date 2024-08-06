var x = 10; // x é global

function exemplo() {
    console.log(x); // Acessa a variável global x
}

exemplo(); // Vai imprimir 10
console.log(x); // Vai imprimir 10




function exemplo() {
    var y = 20; // y é local da função
    console.log(y); // Acessa y dentro da função
}

exemplo(); // Vai imprimir 20
console.log(y); // Vai dar erro porque y não está definida no escopo global