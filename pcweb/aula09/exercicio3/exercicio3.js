function roma(numero2) {
    let vetor = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];
    let resultado = []
    for (let value of vetor) {
        let i = parseInt(numero2 / value[0]);
        numero2 = numero2 % value[0];
        if (i) {
            resultado.push(value[1].repeat(i));
        }
    }
    return resultado.join("");
}
document.getElementById("b1").addEventListener("click", () => {
    const numero1 = document.getElementById("numero");
    const imprim = document.getElementById("imprimir");
    imprim.innerHTML = roma(parseInt(numero1.value));
})