/*
Faça uma função chamada getArrayRange, que recebe dois parâmetros chamados begin e end do tipo number e retorna um array
 com a sequência de números entre os dois parâmetros informados de forma inclusiva;
*/


function getArrayRange(begin, end) {
    let myArray = [];
    for (let i = begin; i >= end; i -= 1) {
        myArray.push(i)

    }
    for (let i = begin; i <= end; i += 1) {
        myArray.push(i);
    }
    return myArray;
}


// Explicação
/*
Function recebe uma chamada que precisa retorna uma contagem,
para isso fazemos um laço de repetição, cada vez que begin for maior ou igual a end ele diminui, ou aumenta cada passo.
*/

//  console.log(getArrayRange(0,4));      
//  console.log(getArrayRange(4,-2));      
//  console.log(getArrayRange(-4,3));      



