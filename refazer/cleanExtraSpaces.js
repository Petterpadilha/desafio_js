/*
Faça uma função chamada cleanExtraSpaces, que recebe um parâmetro,
chamado val do tipo string, com várias palavras separadas por um 
ou mais espaços, e retorna uma string removendo excessos de espaços.
 */

function cleanExtraSpaces(val) {
    return val.trim().replace(/\s+|\s+$/g, " ")
}
//Explicação
/*
Função recebe um parâmetro, e precisa retornar uma string, removendo os espaço desnecessário,
para fazer isso utilizaremos o trim e o replace e o regex, o metodo trim remove os espaço no inicio e no final,
o replace retorna uma nova string, substituindo as ocorrencias, o regex é uma combinação regulares, que seleciona as 
combinações de caracteres em uma string.
 */
// console.log(cleanExtraSpaces('Hello                                             Word'));
// console.log(cleanExtraSpaces('Plantai                       Gestão                        Agrícula'));
// console.log(cleanExtraSpaces('Av Maria '));


