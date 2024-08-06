// Verifica o tipo de Object
console.log(typeof Object); // "function" -> Object é uma função que cria objetos
// Verifica o tipo de uma instância criada com Object
console.log(typeof new Object()); // "object" -> new Object() cria uma nova instância de um objeto

// Função construtora Cliente
const Cliente = function() {};
// Verifica o tipo da função construtora Cliente
console.log("Typeof = " + typeof Cliente); // "function" -> Cliente é uma função
// Verifica o tipo de uma instância criada com Cliente
console.log("typeof new = " + typeof new Cliente()); // "object" -> new Cliente() cria uma nova instância de Cliente

// Classe Produto
class Produto {}
// Verifica o tipo da classe Produto
console.log("Typeof = " + typeof Produto); // "function" -> Produto é uma classe (função)
// Verifica o tipo de uma instância criada com Produto
console.log("Typeof new = " + typeof new Produto()); // "object" -> new Produto() cria uma nova instância de Produto


/*
Resumo dos Comentários:
typeof Object: Mostra que Object é uma função.
typeof new Object(): Mostra que new Object() cria um objeto.
typeof Cliente: Mostra que Cliente é uma função construtora.
typeof new Cliente(): Mostra que new Cliente() cria um objeto.
typeof Produto: Mostra que Produto é uma classe (também uma função).
typeof new Produto(): Mostra que new Produto() cria um objeto.
*/