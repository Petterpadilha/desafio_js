/*
Faça uma função chamada currentDate, que não recebe parâmetros e retorna a data,
atual no formato: DD-MM-YYYY.
 */

function currentDate() {
    let data = new Date(),
        dia = data.getDate().toString().padStart(2, '0'),
        mes = (data.getMonth() + 1).toString().padStart(2, '0'),
        ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

/*
Função recebe um parâmetro, e precisa retorna a data atual,
para isso utilizamos uma função chamada new Date(), agora precisamos formatar a data,
para isso utilizamos o dia data.getDate().toString().padStart(2, "0") e quantas casa decimal 2,
para o mês (data.getMonth() + 1).toString().padStart(2, "0"), e quantas casa decimal 2,
e por ultimo o ano data.getFullYear().
*/
// console.log(currentDate())
