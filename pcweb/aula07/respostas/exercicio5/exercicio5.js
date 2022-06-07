const checar = numero => {
    numero = parseFloat(numero);
    if (!numero || NaN) {
        return 0;
    } else {
        return numero;
    }
}
const percentual = (number3) => {
    let atual = number3 * 0.10;
    return number3 + atual;
}
document.getElementById("button").addEventListener("click", () => {
    const number1 = document.getElementById("numero1");
    const impressao = document.getElementById("impr");
    impressao.innerHTML = percentual(parseFloat(number1.value));
})