/*
Faça uma função chamada `arrayAvg` que recebe um 
parâmetro chamado `list` do tipo `array` e retorna 
um `number` que é a média de todos os números do array, 
outros tipos além de números enviados junto com a lista 
devem ser ignorados e removidos do cálculo;
*/

function arrayAvg(val) {
    let media = val
        .filter((num) => typeof num === "number")
        .reduce( (total, item, indice, array) => {
            total += item;

            if (indice == array.length - 1) {
                return total / array.length;
            }

            return total;
        }, 0);
    return parseFloat(media.toFixed(2));
}

 console.log(arrayAvg(["ok", 15,8, 20,{},'text', 8,1,5.5]))
