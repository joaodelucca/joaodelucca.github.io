const checar = numero => {
    numero = parseFloat(numero);
    if (!numero || NaN) {
        return 0;
    } else {
        return numero;
    }
}
const fatorial = (number2) => {
    // verificar se o valor é natural, ou seja, se ele for negativou ou não for inteiro, ele nao será um numero natural
    if (!Number.isInteger(number2) || fatorial < 0) {
        return 'Não existe fatorial de um número não natural';
    }
    //se o numero for igual a 0 ou 1, retornara 1, já que o valor fatorial de 0 e 1 é = a 1 
    if (number2 === 0 || number2 === 1) {
        return 1;
    }
    var resultado = number2;
    var multiplicador = resultado - 1;
    for (var i = multiplicador; i > 1; i--) {
        resultado = resultado * i;
    }
    return resultado;
}

document.getElementById("button").addEventListener("click", () => {
    const number1 = document.getElementById("numero1");
    const imprimir = document.getElementById("impr");
    imprimir.innerHTML = fatorial(parseFloat(number1.value));
})