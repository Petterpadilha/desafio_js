/*
Faça uma função chamada arrayResize que recebe um parâmetro,
chamado list do tipo array e outro parâmetro chamado size do, 
tipo number e retorna um array contendo, os primeiros itens do parâmetro ,
list limitados pelo tamanho do parâmetro size.
*/

function arrayResize(list, size) {
    return list.slice(0, size);
}
/*
  Função recebe um parâmetro, que precisa retorna um array listando os itens,
  para isso, utilizamos o slice que permite fatiar o array, e adicionar em novo array,
  slice precisa receber dois números, inicio e o fim.
*/

// console.log(arrayResize([18,20,30,'ok',25,24],5))
// console.log(arrayResize([18,20,30,25,24],3))
