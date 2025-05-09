// Desafio 5: Inversão de caracteres de uma string
function inverterString(texto) {
    if (typeof texto !== 'string') {
        return "Entrada inválida. Por favor, forneça uma string.";
    }
    
    let textoInvertido = '';
    
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }
    
    return textoInvertido;
}

// Testes com algumas strings
const exemplos = [
    "Target Sistemas",
    "Processo Seletivo",
    "JavaScript",
    "Olá, mundo!",
];

exemplos.forEach(exemplo => {
    console.log(`Original: "${exemplo}"`);
    console.log(`Invertido: "${inverterString(exemplo)}"`);
    console.log("---");
});

