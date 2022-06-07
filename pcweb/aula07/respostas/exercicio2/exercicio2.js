const checar = numero => {
    numero = parseFloat(numero);
    if (!numero || NaN) {
        return 0;
    } else {
        return numero;
    }
}
const maior = (number3, number4) => {
    if (number3 == number4) {
        return 'os dois numeros são iguais';
    }
    if (number3 > number4) {
        return 'O numero 1 é maior';
    } else {
        return 'O numero 2 é maior';
    }
}

document.getElementById("button").addEventListener("click", () => {
    const number1 = document.getElementById("numero1");
    const number2 = document.getElementById("numero2");
    const impressao = document.getElementById("impr");
    impressao.innerHTML = maior(parseFloat(number1.value), parseFloat(number2.value));
})