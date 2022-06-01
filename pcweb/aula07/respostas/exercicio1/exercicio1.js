const checar = numero => {
numero = parseFloat(numero);
 if(!numero || NaN) {
    return 0;
} else {
    return numero;
}
}

const soma = (number3, number4) => {
    return number3 + number4;
}
document.getElementById("button").addEventListener("click", () => {
const number1 = document.getElementById("numero1");
const number2 = document.getElementById("numero2");
const imprimir = document.getElementById("impr");
imprimir.innerHTML = soma(parseFloat(number1.value), parseFloat(number2.value));
})