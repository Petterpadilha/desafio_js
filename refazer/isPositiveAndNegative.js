/*
Faça uma função chamada isPositiveAndNegative que recebe dois parâmetros, chamados val1 e val2 
do tipo number e retorna um boolean, true caso um número for negativo e o outro positivo não importa a ordem.
*/

function isPositiveAndNegative(val1, val2) {
    return (val1 < 0 && val2 > 0) || (val1 > 0 && val2 < 0);
}

// Explicação

/* 
Função recebe um parâmetro , que precisa retornar um boolean indicando se o valor retornado é verdadeiro ou falso,
para isso fazer esse calculo valor < 0 && valor > 0 || valor > 0 && valor < 0, quando os dois numero um for positivo e o outro negativo,
o valor retornado é verdadeiro, senão o valor é falso.
*/


// console.log(isPositiveAndNegative(-1, 2));
// console.log(isPositiveAndNegative(7, -5));
// console.log(isPositiveAndNegative(2, 5));
// console.log(isPositiveAndNegative(-5, -5));