const botao = document.getElementById("button");

botao.addEventListener("click", () => {
    // Recuperar data digitada
    const dataN = document.getElementById("dataNascimento");
    const dataNa = dataN.value;

    //transformar o valor data em tipo int
    const anodata = parseInt(dataNa.split("-")[0]);
    const mesdata = parseInt(dataNa.split("-")[1]) - 1;
    const diadata = parseInt(dataNa.split("-")[2]);

    const dataNac = new Date(anodata, mesdata, diadata);

    const dataA = new Date();

    const milisse = (dataA.getTime() - dataNac.getTime());

    let tempodevida = (milisse / (1000 * 60 * 60)).toFixed(0);

    const imprimir = document.getElementById("impre");
    imprimir.innerHTML = `O total de horas de vida foram ${tempodevida}`;
})