/*
Faça uma função chamada 50PctNumber que recebe um parâmetro chamado val do tipo number e retorna um 
number equivalente a 50% do valor do parâmetro;
*/

function PctNumber50(val) {
  return (50 / 100) * val
}
/*
 A função recebe um parâmetro, e precisa retornar um valor de 50% do valor,
  então fazemos o seguinte cálculo 50/100 multiplica pelo valor recebido.
*/
console.log(PctNumber50(8))
