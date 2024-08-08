// Exemplo 1: Divisão com tratamento de erro
function dividir(a, b) {
    try {
        if (b === 0) {
            throw new Error("Divisão por zero não é permitida!"); // Lança um erro
        }
        let resultado = a / b;
        console.log("Resultado:", resultado);
    } catch (erro) {
        console.error("Erro:", erro.message); // Captura e exibe o erro
    }
}

dividir(10, 2); // Resultado: 5
dividir(10, 0); // Erro: Divisão por zero não é permitida!

// Exemplo 2: Processamento de dados com finally
function processarDados() {
    try {
        let dados = JSON.parse('{"nome": "Matheus"}'); // JSON válido
        console.log("Dados processados:", dados);
    } catch (erro) {
        console.error("Erro ao processar dados:", erro.message);
    } finally {
        console.log("Finalizando processamento..."); // Sempre será executado
    }
}

processarDados();

// Exemplo 3: Lançamento de erro personalizado
function verificarIdade(idade) {
    if (idade < 18) {
        throw new Error("A idade mínima é 18 anos."); // Lança um erro se a idade for menor que 18
    }
    return "Acesso permitido.";
}

try {
    let resultado = verificarIdade(16);
    console.log(resultado);
} catch (erro) {
    console.error("Erro:", erro.message);
}
