/*
Faça uma função chamada isLeapYear que recebe um parâmetro, chamado date do tipo Date e retorna um boolean,
indicando se o ano for bisexto.
*/

function isLeapYear(date) {
    return new Date(date, 1, 29).getMonth() == 1;
}
/*
Função recebe um parâmetro e precisa retornar um valor boolean indicando se o ano é bisexto é verdadeiro ou falso,
para isso precisamos verificar se o mês de fevereiro vai até dia 29, se o mês de fevereiro for até  29 então o ano é bisexto,
para todos os outros caso o valor é falso.
*/
// console.log(isLeapYear(2144))
// console.log(isLeapYear(2020))
// console.log(isLeapYear(1122))
// console.log(isLeapYear(400))


