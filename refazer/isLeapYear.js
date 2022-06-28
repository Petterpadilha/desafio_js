/*
Faça uma função chamada isLeapYear que recebe um parâmetro, chamado date do tipo Date e retorna um boolean,
indicando se o ano for bisexto.
*/

function isLeapYear(date) {
    return new Date(date, 1, 29).getMonth() == 1;
}
/*
Função retorna um parâmetro, que precisa retornar um valor boolean, se o ano for bisexto é verdadeiro, senão é falso,
para saber se o ano é bisexto new Date(date, 1, 29).getMonth() == 1.
Para isso vamos checar se o mês de fevereiro for até 29 dias, quando o mês for até 29 é bisexto, senão não é bisexto.
*/
console.log(isLeapYear(2144))
console.log(isLeapYear(2020))
console.log(isLeapYear(1122))
console.log(isLeapYear(400))


