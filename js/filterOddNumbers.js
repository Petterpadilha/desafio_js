/*
Faça uma função chamada filterOddNumbers, que recebe um parâmetro chamado list do tipo
array, e retorna um array apenas com os números ímpares, do parâmetro list outros tipos além de
números enviados, junto com a lista devem ser ignorados e removidos do cálculo.
*/



function filterOddNumbers(list) {
    return list.filter(num => (num % 2 != 0));
}
/*
    Função recebe um parâmetro, e precisa retornar um valor com números ímpares,
    paa isso utilizamos o filter e fazemos esse calculo Num % 2 != 0, o retorno será,
    números ímpares.
*/

// console.log(filterOddNumbers([1,2,4,5,8,7,11,10]));




