console.log(a); // undefined, a é levantada, mas ainda não inicializada
var a = 10;
console.log(a); // 10, agora a foi inicializada


// No exemplo acima, a declaração `var a` é "levantada" para o topo do escopo, mas a inicialização `a = 10` só ocorre na linha onde foi escrita. Antes disso, `a` tem o valor `undefined`.

// - **`var`**: Declaração e inicialização são levantadas, inicialização ocorre na linha de código, valores antes são `undefined`.