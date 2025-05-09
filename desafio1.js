// Desafio 1: Calcular o valor da variável SOMA após o processamento
function calcularSoma() {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    console.log(`O valor da variável SOMA é: ${SOMA}`);
    return SOMA;
}

calcularSoma();