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
Função recebe um parâmetro que precisa retornar um valor, removendo os espaços desnecessários,
para isso utilizamos replace() retorna uma nova função, e utilizamos uma função do regExp(/ \s+|\s+$/g, " ") com esses,
parametro removemos os espaços sobrando.
 */
// console.log(cleanExtraSpaces('Hello                                             Word'));
// console.log(cleanExtraSpaces('Plantai                       Gestão                        Agrícula'));
// console.log(cleanExtraSpaces('Av Maria '));


