/*
Faça uma função chamada isPositiveAndNegative que recebe dois parâmetros, chamados val1 e val2 
do tipo number e retorna um boolean, true caso um número for negativo e o outro positivo não importa a ordem.
*/

function isPositiveAndNegative(val1, val2) {
    return (val1 < 0 && val2 > 0) || (val1 > 0 && val2 < 0);
}

// Explicação

/* 
Funão recebe um parametro e precisa retornar dois valores, positivo e negativo, para o retorno ser verdadeiro,
senão o resultado sera falso, para isso utilizaremos esse calculo valor1 é menor que 0 e valor2 é maior que zero, faremos outra condição
ou valor1 é maior que 0 e valor2 é menor que zero, se essas condições forem verdadeira, o resultado retornado séra verdadeiro,
senao todos os outros possiveis resultado sera falso.*/


// console.log(isPositiveAndNegative(-1, 2));
// console.log(isPositiveAndNegative(7, -5));
// console.log(isPositiveAndNegative(2, 5));
// console.log(isPositiveAndNegative(-5, -5));