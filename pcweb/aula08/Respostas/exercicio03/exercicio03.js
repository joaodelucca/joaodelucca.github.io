const checar = numero => {
    numero = parseFloat(numero);
    if (!numero || NaN) {
        return 0;
    } else {
        return numero;
    }
}
const soma = (number2) => {
    var par = number2 / 2;
    if (par % 2 != 0) {
        return "não é um numero par";
    }
    var valor = number2;
    for (var i = 0; i <= 1000; i += 2) {
        valor += i;
    }
    return valor;
}
document.getElementById("button").addEventListener("click", () => {
    const number1 = document.getElementById("numero1");
    const imprimir = document.getElementById("impr");
    imprimir.innerHTML = soma(parseFloat(number1.value));
})