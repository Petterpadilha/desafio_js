/*
Faça uma função chamada isPrime que recebe um parâmetro, chamado val do tipo number e retorna 
um boolean, indicando se o parâmetro é um número primo.
*/

function isPrime(val) {
    for (let i = 2; i < val; i++)
        if (val % i === 0) {
            return false;
        }
    return val > 1;
}
// Explicação

/*
Funçao recebe um parâmetro, que precisa retonar um boolean indicando se o número retornado, é verdadeiro ou falso,
para isso temos que um número primo é aquele número onde ele é divisível apenas por 1 e por ele mesmo.
os primeiros números primos são: 2, 3, 5, 7 e etc.
*/


// console.log(isPrime(0));
// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(5));
