document.getElementById("button").addEventListener("click", () => {
    const number1 = document.getElementById("numero1");
    const impressao = document.getElementById("impr");
    impressao.innerHTML = primo(parseFloat(number1.value));
})
const checar = numero => {
    numero = parseFloat(numero);
    if (!numero || NaN) {
        return 0;
    } else {
        return numero;
    }
}
const primo = (number3) => {

}