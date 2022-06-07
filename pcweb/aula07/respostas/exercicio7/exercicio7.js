const checar = numero => {
    numero = parseFloat(numero);
    if (!numero || NaN) {
        return 0;
    } else {
        return numero;
    }
}
const media = (number4, number5, number6) => {
    return (number4 * 2 + number5 * 3 + number6 * 5) / 10;
}
document.getElementById("button").addEventListener("click", () => {
    const number1 = document.getElementById("numero1");
    const number2 = document.getElementById("numero2");
    const number3 = document.getElementById("numero3");
    const impressao = document.getElementById("impr");
    impressao.innerHTML = media(parseFloat(number1.value), parseFloat(number2.value), parseFloat(number3.value));
})