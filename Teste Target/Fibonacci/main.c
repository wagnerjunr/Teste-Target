#include <stdio.h>

int pertenceFibonacci(int n) {
    int a = 0, b = 1, prox = 0;

    while (prox < n) {
        prox = a + b;
        a = b;
        b = prox;
    }

    if (prox == n)
        return 1; 
    else
        return 0; 
}

int main() {
    int num;

    printf("Digite um número para verificar se ele pertence a sequência de Fibonacci: ");
    scanf("%d", &num);

    if (pertenceFibonacci(num))
        printf("%d pertence à sequência de Fibonacci.\n", num);
    else
        printf("%d não pertence à sequência de Fibonacci.\n", num);

    return 0;
}
