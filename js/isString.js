/*
Faça uma função chamada isString que recebe um parâmetro, chamado val e retorna um boolean
 indicando, se o parâmetro é do tipo string.
*/
function isString(val) {
    return typeof val === "string";
}
//Explicação

/*
Função recebe um parâmetro, que precisa retornar um boolean indicando se o valor retornado é uma string verdadeiro ou falso,
para isso utilizamos typeof para verficar qual é o tipo do valor, e vamos utilizar comparaçao restrita, o valro recebido é do mesmo valor,
e do mesmo tipo que uma string, se for é verdadeiro, senão é falso.
*/

// console.log(isString("8"));
// console.log(isString("tste@"));
// console.log(isString("testes"));
// console.log(isString(""));
// console.log(isString(1));
// console.log(isString(true));
// console.log(isString(null));

