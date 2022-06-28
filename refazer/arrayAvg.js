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
        .reduce((total, item, indice, array) => {
            total += item;

            if (indice == array.length - 1) {
                return total / array.length;
            }

            return total;
        }, 0);
    return media;
}
/*
 Função recebe um parâmetro, que precisa retornar um valor calculando a media entre os array e removendo ou ignorando os outros tipos,
 para isso utilizaremos uma propriedade chamado typeof pra verificar se é um número , depois dessa verificaçao, vamos utilizar,
 filter, buscar de dentro do array apenas numeros, e por ultimo utilizaremos reduce para somar os numero dentro do array, e utilizaremos
 uma propriedade length para contar quantos numeros tem dentro do array, para conseguir retornar o valor calculando a media
*/
console.log(arrayAvg(["ok", 15, 8, 20, {}, 'text', 8, 1, 5.5]))
