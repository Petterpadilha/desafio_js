/*
Faça uma função chamada isGreaterThan100AndMultipleOf3 que recebe um parâmetro, chamado val do tipo number ,
 e retorna um boolean indicando se o numero é maior que 100, e também é um múltiplo de 3.
*/

function isGreaterThan100AndMultipleOf3(val) {
    return val > 100 && val % 3 == 0;
}

/* 
Função recebe um parâmetro, e precisa retornar um boolean indicando se o numero é maior que 100,
e múltiplo de 3, para isso fazemos esse calculo val > 100 && val % 3 == 0, 
caso o número for retorna verdadeiro, senão ele retornar um valor falso.
*/

// console.log(isGreaterThan100AndMultipleOf3(300));
// console.log(isGreaterThan100AndMultipleOf3(306));
// console.log(isGreaterThan100AndMultipleOf3(030));
// console.log(isGreaterThan100AndMultipleOf3(036));