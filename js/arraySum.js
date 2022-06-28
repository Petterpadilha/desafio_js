/*
Faça uma função chamada arraySum que recebe um parâmetro chamado list, do tipo array e retorna um number que é a soma de todos os
 números do array, outros tipos além de números enviados junto com a lista devem ser
 ignorados, e removidos do cálculo;
 */

function arraySum(list) {
    return list
        .filter((num) => typeof num === "number")
        .reduce((sum, num) => sum + num);
}
// console.log(arraySum(["", 12, 14, 16, {}, "ok", 15, "hello", 20]));

// Explicação
/* 
Função recebe um parâmetro e precisa retornar a soma dos valores entre os array, ignorando os outros
tipos que não forem numero, para isso vamos utilizar o filter e o reduce, filter cria um novo array com todos, os
elementos que forem implementado pela função, e reduce executa cada função fornecida para cada elemento do array, 
ele retorna um valor, e a função callbacks testa cada elemento se ele é verdadeiro ou falso.
*/
