let vetor = [];
let primos = [];

function prime2(n) {
    for (let j = 2; j < n; j++) {
        if (n % j === 0) {
            return false;
        }
    }
    return true;
}

function primo2(numero4) {
    for (let i = 2; primos.length < numero4; i++) {
        if (prime2(i)) {
            primos.push(i);
        }
    }
    return primos;
}

function primo3(inicio, final) {
    let vetor = [];
    for (let i = inicio; i < final; i++) {
        if (prime2(i)) {
            vetor.push(i);
        }

    }
    return vetor;
}
console.log(primo3(vetor))
document.getElementById("b1").addEventListener("click", () => {
    const numero1 = document.getElementById("numero1");
    const imprim1 = document.getElementById("imprimir");
    imprim1.innerHTML = primo2(parseInt(numero1.value));
})
document.getElementById("b2").addEventListener("click", () => {
    const numero2 = document.getElementById("numero2");
    const numero3 = document.getElementById("numero3");
    const imprim2 = document.getElementById("imprimir2");
    imprim2.innerHTML = primo3(parseInt(numero2.value), parseInt(numero3.value));
})