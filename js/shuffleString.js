/*
faça uma função chamada shuffleString que recebe um parâmetro, chamado text do tipo string e retorna uma
 string, com o valor do parâmetro "embaralhado".
 */
function shuffleString(text) {
    let novaString = "";
    text = text.split("");
    while (text.length > 0) {
        novaString += text.splice((text.length * Math.random()) << 0, 1);
    }
    return novaString;
}
/*
Função recebe um parâmetro e precisa retorna um valor com a string toda embaralhado,
para isso utilizamos o splice() para separar a string, e utilizamos Math.random(), essa propriedade,
retorna um pseudo-aleatório de 0 – 1, faz a string fica embaralhado.
*/


// console.log(shuffleString("Plantae"));
// console.log(shuffleString("ok"));


