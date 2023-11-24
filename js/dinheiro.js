function calcular() {
    // Entradas
    const nota200_1 = parseFloat(document.getElementById("nota200-1").value);
    const nota200_2 = parseFloat(document.getElementById("nota200-2").value);
    const nota200_3 = parseFloat(document.getElementById("nota200-3").value);
    const nota200_4 = parseFloat(document.getElementById("nota200-4").value);

    const nota100_1 = parseFloat(document.getElementById("nota100-1").value);
    const nota100_2 = parseFloat(document.getElementById("nota100-2").value);
    const nota100_3 = parseFloat(document.getElementById("nota100-3").value);
    const nota100_4 = parseFloat(document.getElementById("nota100-4").value);

    const nota50_1 = parseFloat(document.getElementById("nota50-1").value);
    const nota50_2 = parseFloat(document.getElementById("nota50-2").value);
    const nota50_3 = parseFloat(document.getElementById("nota50-3").value);
    const nota50_4 = parseFloat(document.getElementById("nota50-4").value);

    const nota20_1 = parseFloat(document.getElementById("nota20-1").value);
    const nota20_2 = parseFloat(document.getElementById("nota20-2").value);
    const nota20_3 = parseFloat(document.getElementById("nota20-3").value);
    const nota20_4 = parseFloat(document.getElementById("nota20-4").value);

    const nota10_1 = parseFloat(document.getElementById("nota10-1").value);
    const nota10_2 = parseFloat(document.getElementById("nota10-2").value);
    const nota10_3 = parseFloat(document.getElementById("nota10-3").value);
    const nota10_4 = parseFloat(document.getElementById("nota10-4").value);

    const nota5_1 = parseFloat(document.getElementById("nota5-1").value);
    const nota5_2 = parseFloat(document.getElementById("nota5-2").value);
    const nota5_3 = parseFloat(document.getElementById("nota5-3").value);
    const nota5_4 = parseFloat(document.getElementById("nota5-4").value);

    const nota2_1 = parseFloat(document.getElementById("nota2-1").value);
    const nota2_2 = parseFloat(document.getElementById("nota2-2").value);
    const nota2_3 = parseFloat(document.getElementById("nota2-3").value);
    const nota2_4 = parseFloat(document.getElementById("nota2-4").value);

    const moeda100_1 = parseFloat(document.getElementById("moeda100-1").value);
    const moeda100_2 = parseFloat(document.getElementById("moeda100-2").value);
    const moeda100_3 = parseFloat(document.getElementById("moeda100-3").value);
    const moeda100_4 = parseFloat(document.getElementById("moeda100-4").value);

    const moeda50_1 = parseFloat(document.getElementById("moeda50-1").value);
    const moeda50_2 = parseFloat(document.getElementById("moeda50-2").value);
    const moeda50_3 = parseFloat(document.getElementById("moeda50-3").value);
    const moeda50_4 = parseFloat(document.getElementById("moeda50-4").value);

    const moeda25_1 = parseFloat(document.getElementById("moeda25-1").value);
    const moeda25_2 = parseFloat(document.getElementById("moeda25-2").value);
    const moeda25_3 = parseFloat(document.getElementById("moeda25-3").value);
    const moeda25_4 = parseFloat(document.getElementById("moeda25-4").value);

    const moeda10_1 = parseFloat(document.getElementById("moeda10-1").value);
    const moeda10_2 = parseFloat(document.getElementById("moeda10-2").value);
    const moeda10_3 = parseFloat(document.getElementById("moeda10-3").value);
    const moeda10_4 = parseFloat(document.getElementById("moeda10-4").value);

    const moeda5_1 = parseFloat(document.getElementById("moeda5-1").value);
    const moeda5_2 = parseFloat(document.getElementById("moeda5-2").value);
    const moeda5_3 = parseFloat(document.getElementById("moeda5-3").value);
    const moeda5_4 = parseFloat(document.getElementById("moeda5-4").value);

    const moeda1_1 = parseFloat(document.getElementById("moeda1-1").value);
    const moeda1_2 = parseFloat(document.getElementById("moeda1-2").value);
    const moeda1_3 = parseFloat(document.getElementById("moeda1-3").value);
    const moeda1_4 = parseFloat(document.getElementById("moeda1-4").value);

    // Cálculo
    const totalNota200 = (nota200_1 + nota200_2 + nota200_3 + nota200_4) * 200;
    const totalNota100 = (nota100_1 + nota100_2 + nota100_3 + nota100_4) * 100;
    const totalNota50 = (nota50_1 + nota50_2 + nota50_3 + nota50_4) * 50;
    const totalNota20 = (nota20_1 + nota20_2 + nota20_3 + nota20_4) * 20;
    const totalNota10 = (nota10_1 + nota10_2 + nota10_3 + nota10_4) * 10;
    const totalNota5 = (nota5_1 + nota5_2 + nota5_3 + nota5_4) * 5;
    const totalNota2 = (nota2_1 + nota2_2 + nota2_3 + nota2_4) * 2;
    const totalMoeda100 = (moeda100_1 + moeda100_2 + moeda100_3 + moeda100_4) * 1;
    const totalMoeda50 = (moeda50_1 + moeda50_2 + moeda50_3 + moeda50_4) * 0.5;
    const totalMoeda25 = (moeda25_1 + moeda25_2 + moeda25_3 + moeda25_4) * 0.25;
    const totalMoeda10 = (moeda10_1 + moeda10_2 + moeda10_3 + moeda10_4) * 0.1;
    const totalMoeda5 = (moeda5_1 + moeda5_2 + moeda5_3 + moeda5_4) * 0.05;
    const totalMoeda1 = (moeda1_1 + moeda1_2 + moeda1_3 + moeda1_4) * 0.01;

    const total = totalNota200 + totalNota100 + totalNota50 + totalNota20 + totalNota10 + totalNota5 + totalNota2 + totalMoeda100 + totalMoeda50 + totalMoeda25 + totalMoeda10 + totalMoeda5 + totalMoeda1;

    // Saída
    document.getElementById("resultado").textContent = total.toFixed(2);
}

function limpar() {
    document.getElementById("nota200-1").value = 0;
    document.getElementById("nota200-2").value = 0;
    document.getElementById("nota200-3").value = 0;
    document.getElementById("nota200-4").value = 0;

    document.getElementById("nota100-1").value = 0;
    document.getElementById("nota100-2").value = 0;
    document.getElementById("nota100-3").value = 0;
    document.getElementById("nota100-4").value = 0;

    document.getElementById("nota50-1").value = 0;
    document.getElementById("nota50-2").value = 0;
    document.getElementById("nota50-3").value = 0;
    document.getElementById("nota50-4").value = 0;

    document.getElementById("nota20-1").value = 0;
    document.getElementById("nota20-2").value = 0;
    document.getElementById("nota20-3").value = 0;
    document.getElementById("nota20-4").value = 0;

    document.getElementById("nota10-1").value = 0;
    document.getElementById("nota10-2").value = 0;
    document.getElementById("nota10-3").value = 0;
    document.getElementById("nota10-4").value = 0;

    document.getElementById("nota5-1").value = 0;
    document.getElementById("nota5-2").value = 0;
    document.getElementById("nota5-3").value = 0;
    document.getElementById("nota5-4").value = 0;

    document.getElementById("nota2-1").value = 0;
    document.getElementById("nota2-2").value = 0;
    document.getElementById("nota2-3").value = 0;
    document.getElementById("nota2-4").value = 0;

    document.getElementById("moeda100-1").value = 0;
    document.getElementById("moeda100-2").value = 0;
    document.getElementById("moeda100-3").value = 0;
    document.getElementById("moeda100-4").value = 0;

    document.getElementById("moeda50-1").value = 0;
    document.getElementById("moeda50-2").value = 0;
    document.getElementById("moeda50-3").value = 0;
    document.getElementById("moeda50-4").value = 0;

    document.getElementById("moeda25-1").value = 0;
    document.getElementById("moeda25-2").value = 0;
    document.getElementById("moeda25-3").value = 0;
    document.getElementById("moeda25-4").value = 0;

    document.getElementById("moeda10-1").value = 0;
    document.getElementById("moeda10-2").value = 0;
    document.getElementById("moeda10-3").value = 0;
    document.getElementById("moeda10-4").value = 0;

    document.getElementById("moeda5-1").value = 0;
    document.getElementById("moeda5-2").value = 0;
    document.getElementById("moeda5-3").value = 0;
    document.getElementById("moeda5-4").value = 0;

    document.getElementById("moeda1-1").value = 0;
    document.getElementById("moeda1-2").value = 0;
    document.getElementById("moeda1-3").value = 0;
    document.getElementById("moeda1-4").value = 0;

    // Redefinir o resultado para 0,00
    document.getElementById("resultado").textContent = '0,00';
}

function adicionar1(inputId) {
    var input = document.getElementById(inputId);
    var valorAtual = parseInt(input.value);
    input.value = valorAtual + 1;
}

function adicionar5(inputId) {
    var input = document.getElementById(inputId);
    var valorAtual = parseInt(input.value);
    input.value = valorAtual + 5;
}

function adicionar10(inputId) {
    var input = document.getElementById(inputId);
    var valorAtual = parseInt(input.value);
    input.value = valorAtual + 10;
}