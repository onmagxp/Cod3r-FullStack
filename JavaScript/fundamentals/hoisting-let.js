console.log(b); // ReferenceError, b está na TDZ
let b = 20;
console.log(b); // 20, agora b foi inicializada


// No exemplo acima, a variável `b` é "levantada" para o topo do bloco, mas não é inicializada até a linha `let b = 20`. Tentar acessar `b` antes dessa linha resulta em um erro.

// - **`let`**: Apenas a declaração é levantada, a variável fica na TDZ até a inicialização, acessos antes resultam em `ReferenceError`.