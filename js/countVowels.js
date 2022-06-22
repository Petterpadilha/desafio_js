/*
Faça uma função chamada countVowels, que recebe um parâmetro chamado 
val, do tipo string e retorna um number, com a contagem das vogais.
*/

function countVowels(val) {
    const count = val.match(/[aeiouáàãâäéèẽêëíìîïóòõôöúùûü]/gi).length;

    return count;
}
// Expicação
/*
Função recebe um parâmetro chamada, e precisa retornar um valor numerico, com as contagem das vogais,
para isso utilizamos uma uma função do regex
*/

// console.log(countVowels("áe"));
// console.log(countVowels("oook"));
// console.log(countVowels("PlantaE"));
// console.log(countVowels("developer"));

