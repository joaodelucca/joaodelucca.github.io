const checar = numero => {
    numero = parseFloat(numero);
    if (!numero || NaN) {
        return 0;
    } else {
        return numero;
    }
}
const fibonacci = (number3) => {
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < number3; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
}

document.getElementById("button").addEventListener("click", () => {
    const number1 = document.getElementById("numero1");
    const imprimir = document.getElementById("impr");
    imprimir.innerHTML = fibonacci(parseFloat(number1.value));
})