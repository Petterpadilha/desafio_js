/*
Faça uma função chamada stringWrap que recebe um parâmetro, chamado text do tipo string, e outro parâmetro chamado wrapper,
do tipo string e retorna uma string que é o parâmetro text, "empacotado" no meio de dois parâmetros wrapper.
*/

function stringWrap(text, wrapper) {
    return `${wrapper}${text}${wrapper}`;
}
//Explicação
/*
Function recebe uma chamada e precisa retorna um valor empacotando a variável,
para isso basta colocar no inicio e no final, usando template string.
*/
//console.log(stringWrap("text","*"));
//console.log(stringWrap("text","<span>"));
// Concluído









