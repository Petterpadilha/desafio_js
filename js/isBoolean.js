/*
Faça uma função chamada isBoolean que recebe um parâmetro, chamado val 
e retorna um boolean, indicando se o parâmetro é do tipo boolean.
*/

function isBoolean(val) {
    return typeof val === "boolean";
}
/*
Função recebe um parâmetro, e precisa retornar um boolean se é verdadeiro ou falso.
para isso utilizamos  val === boolean operador de igualdade restrita, verificamos se o valor recebido,
e do mesmo valor e do mesmo tipo.
*/

// console.log(isBoolean(true));
// console.log(isBoolean(false));
// console.log(isBoolean(1));
// console.log(isBoolean(null));