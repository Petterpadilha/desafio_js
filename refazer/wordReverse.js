/*
Faça uma função chamada wordReverse que recebe um parâmetro, chamado text do tipo string contendo várias 
palavras, separadas por espaço e retorne uma string, com as palavras invertidas de trás para frente.
*/


function wordReverse(text) {
    return text.split(' ').reverse().join(" ");
}

/*
Função recebe um parâmetro, que precisa retorna um valor invetendo as string de tras, para frente,
para isso utilizamos split() para separar as string. reverse() para inverter as string, e por ultimo,
o join() para adicionar em uma nova string.
*/
// console.log(wordReverse('Hello Word'))
// console.log(wordReverse('ANDROID IPHONE'))
// console.log(wordReverse('NotEbOoK DeSkToP '))

