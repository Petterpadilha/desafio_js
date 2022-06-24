/*
Faça uma função chamada groupByOddEven que recebe um parâmetro, chamado list do tipo array e retorna um object com duas 
chaves, uma chamada odd contendo um array com os números ímpares e outra chave chamada even com os números pares, outros tipos além de
números enviados junto com text lista devem ,ser ignorados e removidos do cálculo.
*/



function groupByOddEven(list) {
    let even = [], odd = [];
   list.filter (num => ( num % 2 === 0 ? even:odd).push(num))
   return { even, odd };
}
   console.log(groupByOddEven([1,2,3,4,5,6,7,8,9,10]));       
/*
 Função recebe um parâmetro, que precisa retornar duas-chave, uma para os números ímpar e outra para números ímpares,
 para isso utilizamos o filter para percorrer, e fazemos esse calculo para verificar, se o número é ímpar ou par i % 2 === 0 ? even: odd,
 fazendo esse calculo vai retornar números ímpar e números par.
 */

 // list.filter(i => { (i % 2 === 0 ? even : odd).push(i); });
    // return { even, odd };
