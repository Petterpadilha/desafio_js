/*
Faça uma função chamada stringInitials que recebe um parâmetro, chamado text do tipo string contendo várias palavras e retorna uma 
string extraindo, apenas o primeiro caractere de cada palavra em caixa alta.
 */

function stringInitials(text) {
    return text
        .split(" ")
        .map((i) => i[0].toUpperCase())
        .join("");
}

// Explicação
// function recebe uma chamada e precisa retorna apenas a inicial de cada frase
// em caixa alta, pra isso precisamos precisamos usar o split pra separar e toUpperCase
// para deixar em caixa alta
/*
console.log(stringInitials("Plantae gestão agrícola"));
*/
