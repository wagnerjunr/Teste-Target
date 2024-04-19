
#include <stdio.h>
#include <string.h>

int main() {
  char entrada[51], saida[51];

  printf("Entrada: ");
  scanf("%[^\n]s", &entrada);

  int i, j, n;

  n = strlen(entrada); 
  j = n - 1; 
  
  for(i=0; i<n; i++) {
    saida[i] = entrada[j];
    j--;
  }

  saida[i] = '\0'; 

  printf("\n");
  printf("Entrada: %s\n", entrada);
  printf("Saida: %s\n", saida);

  return(0);
}