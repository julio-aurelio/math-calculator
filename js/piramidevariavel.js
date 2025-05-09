document.getElementById('calcular').addEventListener('click', function () {
    const ladoBase = parseFloat(document.getElementById('comprimento').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const numLados = parseInt(document.getElementById('quantidade').value);

    if (!ladoBase || !altura || !numLados) {
        alert('Por favor, preencha todos os campos com valores numéricos válidos.');
        return;
    }

    if (isNaN(ladoBase) || isNaN(altura) || isNaN(numLados)) {
        alert('Por favor, insira valores numéricos válidos.');
        return;
    }

    if (numLados < 3) {
        alert('O número de lados deve ser 3 ou mais.');
        return;
    }

    if (ladoBase <= 0 || altura <= 0) {
        alert('Os valores devem ser maiores que zero.');
        return;
    }

    let areaBase;
    let apotemaBase;

    if (numLados === 3) {
        // Usa sua fórmula específica para base triangular equilátera
        areaBase = (ladoBase * ladoBase * Math.sqrt(3)) / 4;
        apotemaBase = ladoBase / (2 * Math.tan(Math.PI / 3));
    } else {
        // Fórmula geral para qualquer polígono regular
        areaBase = (numLados * Math.pow(ladoBase, 2)) / (4 * Math.tan(Math.PI / numLados));
        apotemaBase = ladoBase / (2 * Math.tan(Math.PI / numLados));
    }

    const perimetroBase = numLados * ladoBase;

    const apotemaPiramide = Math.sqrt(Math.pow(altura, 2) + Math.pow(apotemaBase, 2));

    const areaLateral = (perimetroBase * apotemaPiramide) / 2;

    const areaTotalSuperficie = areaBase + areaLateral;

    const volume = (1 / 3) * areaBase * altura;

    const arestaLateral = Math.sqrt(Math.pow(ladoBase / 2, 2) + Math.pow(apotemaPiramide, 2));
    const perimetroTotalArestas = perimetroBase + (numLados * arestaLateral);

    document.getElementById('volume').textContent = ` ${volume.toFixed(2)} 'unidade³`;
    document.getElementById('perimetro-total').textContent = ` ${perimetroTotalArestas.toFixed(2)} unidade`;
    document.getElementById('area-total').textContent = `${areaTotalSuperficie.toFixed(2)} unidade²`;
});
//TUDO CERTO
