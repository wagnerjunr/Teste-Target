# Desafios de Programação - Target Sistemas

Este repositório contém a implementação de 5 desafios de programação em JavaScript.

## Como Executar

Para executar qualquer um dos desafios, você precisa ter o Node.js instalado. Em seguida, execute:

```bash
node desafioX.js

## Desafio 1: Cálculo da Soma
Descrição: Calcular o valor final da variável SOMA após o processamento do algoritmo fornecido.

Processo de Resolução:

1. Implementei o algoritmo exatamente como descrito no enunciado
2. O algoritmo inicializa INDICE=13, SOMA=0 e K=0
3. Enquanto K < INDICE, incrementa K e adiciona K à SOMA
4. Ao final, imprime o valor de SOMA
Resultado: O valor final da variável SOMA é 91.

Explicação: A soma é equivalente a 1+2+3+...+13, que é a soma dos primeiros 13 números naturais.

## Desafio 2: Sequência de Fibonacci
Descrição: Verificar se um número informado pertence à sequência de Fibonacci.

Processo de Resolução:

1. Implementei uma função que gera a sequência de Fibonacci até encontrar ou ultrapassar o número informado
2. A sequência começa com 0 e 1, e cada próximo número é a soma dos dois anteriores
3. Se o número for encontrado na sequência, retorna que ele pertence
4. Caso contrário, retorna que não pertence
Funcionalidades:

- Validação de entrada (números negativos ou não inteiros)
- Tratamento de casos especiais (0 e 1)
- Opção para testar múltiplos números ou receber entrada do usuário
## Desafio 3: Análise de Faturamento Diário
Descrição: Analisar dados de faturamento diário de uma distribuidora para encontrar:

- O menor valor de faturamento ocorrido em um dia do mês
- O maior valor de faturamento ocorrido em um dia do mês
- Número de dias no mês em que o valor de faturamento diário foi superior à média mensal
Processo de Resolução:

1. Criei um arquivo JSON com os dados de faturamento diário
2. Implementei uma função que lê e analisa esses dados
3. Filtrei os dias sem faturamento (valor zero) para não considerá-los no cálculo da média
4. Calculei o menor valor, maior valor e a média mensal
5. Contei quantos dias tiveram faturamento acima da média
Observações:

- O programa ignora dias sem faturamento (finais de semana e feriados)
- Utiliza o módulo fs do Node.js para ler o arquivo JSON
## Desafio 4: Percentual de Representação por Estado
Descrição: Calcular o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

Processo de Resolução:

1. Defini um objeto com os valores de faturamento por estado
2. Calculei o valor total somando todos os valores
3. Para cada estado, calculei o percentual dividindo seu valor pelo total e multiplicando por 100
4. Formatei os resultados para exibição com duas casas decimais
Resultado: O programa exibe o percentual de cada estado no faturamento total.

## Desafio 5: Inversão de String
Descrição: Inverter os caracteres de uma string sem usar funções prontas.

Processo de Resolução:

1. Implementei uma função que recebe uma string como entrada
2. Criei uma nova string vazia para armazenar o resultado
3. Percorri a string original do último caractere até o primeiro
4. Adicionei cada caractere à nova string
5. Retornei a string invertida
Funcionalidades:

- Validação de entrada
- Exemplos com diferentes strings
- Opção para receber entrada do usuário