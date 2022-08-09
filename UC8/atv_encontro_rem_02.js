// algoritmo sistema de contagem e classificação de alunos

let alunos = 15;

for (let contador = 0; contador < alunos; contador++) {
   
    console.log(contador);

    if (contador == 0) {
        
        console.log('o número é o zero')
    }
    if (contador % 2 == 0 && contador != 0) {
        
        console.log('o número é par')

    }
    if (contador % 2 != 0) {

        console.log('o número é ímpar')

    }
}

