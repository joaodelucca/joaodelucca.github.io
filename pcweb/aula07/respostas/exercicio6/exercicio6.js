const checar = numero => {
    numero = parseFloat(numero);
    if (!numero || NaN) {
        return 0;
    } else {
        return numero;
    }
}
const celcius = (number2) => {
    return (number2 - 32) / 1.8;
}
document.getElementById("button").addEventListener("click", () => {
    const number1 = document.getElementById("numero1");
    const impressao = document.getElementById("impr");
    impressao.innerHTML = celcius(parseFloat(number1.value));
})