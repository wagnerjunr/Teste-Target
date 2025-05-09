// Desafio 3: Análise de faturamento diário
const fs = require('fs');

function analisarFaturamento(caminhoArquivo) {
    try {
        // Leitura do arquivo JSON
        const dados = JSON.parse(fs.readFileSync(caminhoArquivo, 'utf8'));
        
        // Filtra dias com faturamento (remove dias sem faturamento)
        const diasComFaturamento = dados.filter(dia => dia.valor > 0);
        
        if (diasComFaturamento.length === 0) {
            return "Não há dados de faturamento válidos.";
        }
        
        // Encontra o menor valor de faturamento
        const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
        
        // Encontra o maior valor de faturamento
        const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));
        
        // Calcula a média mensal (apenas em dias com faturamento)
        const somaFaturamento = diasComFaturamento.reduce((soma, dia) => soma + dia.valor, 0);
        const mediaMensal = somaFaturamento / diasComFaturamento.length;
        
        // Conta dias com faturamento acima da média
        const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;
        
        return {
            menorFaturamento: menorFaturamento.toFixed(2),
            maiorFaturamento: maiorFaturamento.toFixed(2),
            diasAcimaDaMedia: diasAcimaDaMedia
        };
    } catch (erro) {
        return `Erro ao processar o arquivo: ${erro.message}`;
    }
}

// Executa a análise
const resultado = analisarFaturamento('./dados_faturamento.json');
console.log("Análise de Faturamento Diário:");
console.log(`Menor valor de faturamento: R$ ${resultado.menorFaturamento}`);
console.log(`Maior valor de faturamento: R$ ${resultado.maiorFaturamento}`);
console.log(`Número de dias com faturamento acima da média mensal: ${resultado.diasAcimaDaMedia}`);