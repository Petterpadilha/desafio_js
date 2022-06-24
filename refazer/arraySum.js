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
Função recebe um parâmetro e precisa retornar um valor, calculando a soma entre o array,
para isso utilizamos um metodo reduce para calcular o array, o valor que vai retornar sera a soma dos array.
*/
