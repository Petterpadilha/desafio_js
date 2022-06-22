/*
Faça uma função chamada isEven que recebe um parâmetro, chamado val do 
tipo number, e retorna um boolean indicando se o parâmetro é par.
*/

function isEven(val) {
    return val % 2 === 0;
}
// explicação

/* 
Funçao recebe um parâmetro que precisa retornar se o número é impar ou par,
para fazer isso a melhor  maneira é utilizar % o resto da divisão.
Então quando o valor % 2 der o resto 0, o número é par, caso contrario o número é impar.
*/
// console.log(isEven(5));
// console.log(isEven(2));