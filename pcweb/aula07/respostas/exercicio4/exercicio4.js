const checar = numero => {
    numero = parseFloat(numero);
    if (!numero || NaN) {
        return 0;
    } else {
        return numero;
    }
}
const hipotenusa = (cateto2, cateto3) => {
    let hipotenusa1 = cateto2 * cateto2 + cateto3 * cateto3;
    return Math.sqrt(hipotenusa1);

}
document.getElementById("button").addEventListener("click", () => {
    const number1 = document.getElementById("Cateto1");
    const number2 = document.getElementById("Cateto2");
    const impressao = document.getElementById("impr");
    impressao.innerHTML = hipotenusa(parseFloat(number1.value), parseFloat(number2.value));
})