function notas(dinheiro) {
    let total = [];
    if (dinheiro % 2 == 0) {
        let vetor = [100, 50, 20, 10, 2, 5];
        for (let nota of vetor) {
            let i = parseInt(dinheiro / nota);
            if (i) {
                total.push([nota, i]);
            }
            dinheiro -= i * nota;
        }
        document.getElementById("imprimir").value = total;
    } else {
        let vetor = [100, 50, 20, 10, 5, 2];
        for (let nota of vetor) {
            let i = parseInt(dinheiro / nota);
            if (i) {
                total.push([nota, i]);
            }
            dinheiro -= i * nota;
        }
    }
    return total;
}
document.getElementById("b1").addEventListener("click", () => {
    const numero1 = document.getElementById("numero");
    const imprim = document.getElementById("imprimir");
    imprim.innerText = notas(parseInt(numero1.value));
})