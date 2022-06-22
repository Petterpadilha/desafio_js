/*
Faça uma função chamada removeEdges que recebe um parâmetro, chamado text do tipo string e retorna 
a string, sem o primeiro e último caractere;
*/

function removeEdges(text) {
    return text.slice(1, -1);
}
/*
Função recebe um parâmetro, que precisa retornar um valor removendo o primeiro e o último caracteres da string,
para isso utilizamos o slice para fatiar a string, e precisamos passar dois números o primeiro é o 1 para pegar o primeiro caracteres,
e o -1 para pegar o último caracteres da string.
*/

// console.log(removeEdges('*teste*'))
// console.log(removeEdges('**teste**'))

