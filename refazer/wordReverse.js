/*
Faça uma função chamada wordReverse que recebe um parâmetro, chamado text do tipo string contendo várias 
palavras, separadas por espaço e retorne uma string, com as palavras invertidas de trás para frente.
*/

function wordReverse(text) {
    return text.split(' ').reverse().join(' ')
}

/*
Função recebe um parâmetro e precisa retornar uma string invertida de trás para frente,
para isso utilizaremos o splic,reverse, e o join, o método splic divide uma string , e coloca essas string em um array,
o reverse inverte os elemento o primeiro elemento do array, se torna o ultimo elemento, e o join junta todos os elementos de
uma array, em uma string e retorna string.
*/
// console.log(wordReverse('Hello Word'))
// console.log(wordReverse('ANDROID IPHONE'))
// console.log(wordReverse('NotEbOoK DeSkToP '))
