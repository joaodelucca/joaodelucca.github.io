const checar = numero => {
    numero = parseFloat(numero);
    if (!numero || NaN) {
        return 0;
    } else {
        return numero;
    }
}
const potencial = (number2) => {
    for (var i = 1; i <= 30; i++) {
        var expoente = Math.pow(number2, i);
    }
    return expoente;
}
document.getElementById("button").addEventListener("click", () => {
    const number1 = document.getElementById("numero1");
    const imprimir = document.getElementById("impr");
    imprimir.innerHTML = potencial(parseFloat(number1.value));
})