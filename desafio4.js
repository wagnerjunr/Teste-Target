// Desafio 4: Cálculo de percentual de representação por estado
function calcularPercentualPorEstado() {
    // Dados de faturamento por estado
    const faturamentoPorEstado = {
        'SP': 67836.43,
        'RJ': 36678.66,
        'MG': 29229.88,
        'ES': 27165.48,
        'Outros': 19849.53
    };
    
    // Calcula o valor total
    const valorTotal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);
    
    // Calcula o percentual de cada estado
    const percentuaisPorEstado = {};
    
    for (const [estado, valor] of Object.entries(faturamentoPorEstado)) {
        const percentual = (valor / valorTotal) * 100;
        percentuaisPorEstado[estado] = percentual.toFixed(2);
    }
    
    return {
        faturamentoPorEstado,
        valorTotal: valorTotal.toFixed(2),
        percentuaisPorEstado
    };
}

// Executa o cálculo
const resultado = calcularPercentualPorEstado();
console.log("Percentual de Representação por Estado:");
console.log(`Valor total: R$ ${resultado.valorTotal}`);
console.log("\nPercentuais:");

for (const [estado, percentual] of Object.entries(resultado.percentuaisPorEstado)) {
    console.log(`${estado}: ${percentual}%`);
}