/*
Faça uma função chamada isLengthBetween10and20 que recebe um parâmetro, chamado val do tipo string e 
retorna um boolean indicando, se o comprimento da string é maior que 10 e menor que 20.
*/

function isLengthBetween10and20(val) {
    return val.length > 10 && val.length < 20;
}
// Explicação
/*
A função recebe uma string como parametro e deve retornar um boolean indicando se o tamanho da string é maior que 10 e menor que 20.
Para recuperar a  string usamos a propriedade lenght
Verificamos se o valor retornado da propriedade lenght é maior do que 10 e menor que 20
Se for maior do que 10 e menor que 20 retorna verdadeiro, senão retorna falso.
*/

// console.log(isLengthBetween10and20("tesssssssssssssssss"));
// console.log(isLengthBetween10and20("test-lower"));
// console.log(isLengthBetween10and20("test-greater"));
