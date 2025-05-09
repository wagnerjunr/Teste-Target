// Desafio 2: Verificar se um número pertence à sequência de Fibonacci
function verificaFibonacci(numero) {
    // Validação de entrada
    if (numero < 0 || !Number.isInteger(numero)) {
        return `O número ${numero} não é válido para a sequência de Fibonacci.`;
    }

    // Casos especiais
    if (numero === 0 || numero === 1) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    }

    // Cálculo da sequência de Fibonacci até encontrar ou ultrapassar o número
    let anterior = 0;
    let atual = 1;
    let proximo = anterior + atual;

    while (proximo <= numero) {
        if (proximo === numero) {
            return `O número ${numero} pertence à sequência de Fibonacci.`;
        }
        anterior = atual;
        atual = proximo;
        proximo = anterior + atual;
    }

    return `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
}

// Teste com alguns números
const numerosParaTestar = [0, 1, 2, 3, 5, 8, 13, 21, 7, 10, 15];
numerosParaTestar.forEach(numero => {
    console.log(verificaFibonacci(numero));
});
