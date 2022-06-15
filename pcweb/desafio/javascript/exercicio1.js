document.getElementById("button").addEventListener("click", () => {
    const datenac = document.getElementById("dataNascimento");
    const impressao = document.getElementById("impre");
    var dateatu = new Date;
    impressao.innerHTML = diferenca(datenac, dateatu);
})
const diferenca = (data, data2) => {
    const comparacao = data.getTime() - data2.getTime();
    return comparacao * 1000;
}