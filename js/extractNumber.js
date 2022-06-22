/*
Faça uma função chamada extractNumber, que recebe um parâmetro chamado
val do tipo string, e retorna um number extraindo/eliminando todos,
os caracteres que não forem numéricos.
 */

// Explicação
/*
Função recebe uma chamada que precisa retornar uma String, se conter numero mostrar,
se caso não houver numero ser ignorado ou removido,
então pra isso usamos uma condição e uma função do RegExp.
Concluído
*/



function extractNumber(val) {
    let numbers = val.replace(/[^0-9]/g, '');
    return (parseFloat(numbers))
}
// console.log((extractNumber("n17")))
// console.log(extractNumber("3294943ASdasdasdasd23424")); 
// console.log(extractNumber("Esta Str1ng tem alguns 3483284 números"))