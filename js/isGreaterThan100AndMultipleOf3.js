/*
Faça uma função chamada isGreaterThan100AndMultipleOf3 que recebe um parâmetro, chamado val do tipo number ,
 e retorna um boolean indicando se o numero é maior que 100, e também é um múltiplo de 3.
*/

function isGreaterThan100AndMultipleOf3(val) {
    return val > 100 && val % 3 == 0;
}

/*
Funçao recebe um parâmetro e prcisa retorna um boolean indicando indicando se o valor é maior que 100, e também é um múltiplo de 3,
para isso faremos esse calculo valor recebido e maior que 100, e também o resto da divisão desse valor é igual a zero, se for o valor
retornado sera verdadeiro ele é maior que 100 , e também é um múltiplo de 3 senão o resultado séra falso.
*/

// console.log(isGreaterThan100AndMultipleOf3(300));
// console.log(isGreaterThan100AndMultipleOf3(306));
// console.log(isGreaterThan100AndMultipleOf3(030));
// console.log(isGreaterThan100AndMultipleOf3(036));