/*
Faça uma função chamada groupByInitials que recebe um parâmetro, chamado list do tipo lista  e retorna um object com as, 
strings agrupadas pela letra inicial, outros tipos além de strings enviados junto com a lista devem ser ignorados e removidos.
*/

function groupByInitials(list) {
    let groups = {};

    let firstChar = list.map((el) => el[0]);
    let firstCharFilter = firstChar.filter((el, id) => {
        return firstChar.indexOf(el) === id;
    });

    firstCharFilter.forEach((el) => {
        groups[
            el
                .toUpperCase()
                .replace(/[ÀÁÂÃÄ]/g, "A")
                .replace(/[ÈÉÊËẼ]/g, "E")
                .replace(/[ÍÌÎĨÏ]/g, "I")
                .replace(/[ÓÒÔÕÖ]/g, "O")
                .replace(/[ÚÙÛŨÜ]/g, "U")
        ] = [];
    });

    firstCharFilter.forEach((MyArray) => {
        for (let word of list) {
            if (word[0] == MyArray) {
                groups[
                    MyArray
                        .toUpperCase()
                        .replace(/[ÀÁÂÃÄ]/g, "A")
                        .replace(/[ÈÉÊËẼ]/g, "E")
                        .replace(/[ÍÌÎĨÏ]/g, "I")
                        .replace(/[ÓÒÔÕÖ]/g, "O")
                        .replace(/[ÚÙÛŨÜ]/g, "U")

                ].push(word[0].toUpperCase() + word.slice(1).toLowerCase());
            }
        }
    });
    return groups;
}
// Explicação
/* Função recebe um parâmetro e precisa retorna uma string agrupando as string com suas iniciais, para isso utilizamos o filter,
para filtrar cada array e retornar a string agrupada com as iniciais, utilizamos o replace para remover ou ignorar caracteres
especiais, como não tem uma função que faça isso , precisamos mapear cada vogais com o replace. */

// console.log(groupByInitials(["Plantae", "Gestão","Agrícola","álbum","Análise","Solo","Plantas","Armazenagem", ]));
