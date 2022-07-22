let vetor = [];

//adicionar valores no vetor --------------------------------------
let addArray = document.getElementById("adicionar").addEventListener("click", () => {
        const input = document.getElementById("entrada");
        vetor.push(parseFloat(input.value));
        return vetor;
    })
    //Calculos ------------------------------------------

function sum(vetor) {
    let resultado = 0;
    for (let i = 0; i < vetor.length; i++) {
        resultado += vetor[i];
    }
    document.getElementById("imprimir").value = ("A soma dos valores do array é: " + resultado);
}


function sumOdds(vetor) {
    let resultado = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 != 0) {
            resultado += vetor[i];
        }
    }
    document.getElementById("imprimir").value = ("A soma dos valores impares do array é: " + resultado);
}

function product(vetor) {
    let resultado = 1;
    for (let i = 0; i < vetor.length; i++) {
        resultado *= vetor[i];
    }
    document.getElementById("imprimir").value = ("A Multiplicação dos valores do array é: " + resultado);
}
product(vetor);
sumOdds(vetor);
sum(vetor);