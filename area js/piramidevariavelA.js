document.getElementById('calcular').addEventListener('click', function () {
    const ladoBase = parseFloat(document.getElementById('comprimento').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const numLados = parseInt(document.getElementById('quantidade').value);

    if (ladoBase === "" || altura === "" || numLados === "") {
        alert('Por favor, preencha todos os campos vazios.');
        return;
    }

    if (isNaN(ladoBase) || isNaN(altura) || isNaN(numLados)) {
        alert('Por favor, insira valores numéricos válidos.');
        return;
    }

    if (numLados <= 2) {
        alert('A pirâmide deve ter pelo menos 3 lados na base.');
        return;
    }

    if (ladoBase <= 0 || altura <= 0) {
        alert('Os valores devem ser maiores que zero.');
        return;
    }

    const apotemaBase = ladoBase / (2 * Math.tan(Math.PI / numLados));

    let areaBase;
    if (numLados === 3) {
        // Triângulo equilátero
        areaBase = (Math.pow(ladoBase, 2) * Math.sqrt(3)) / 4;
    } else {
        // Pirâmide de bases variavéis
        areaBase = (numLados * Math.pow(ladoBase, 2)) / (4 * Math.tan(Math.PI / numLados));
    }

    const apotemaPiramide = Math.sqrt(Math.pow(altura, 2) + Math.pow(apotemaBase, 2));
    const areaLateralFace = (ladoBase * apotemaPiramide) / 2;
    const areaLateral = areaLateralFace * numLados;
    const areaTotalSuperficie = areaBase + areaLateral;

    document.getElementById('area-base').textContent = areaBase.toFixed(2) + ' unidade²';
    document.getElementById('area-lateral').textContent = areaLateral.toFixed(2) + ' unidade²';
    document.getElementById('area-total').textContent = areaTotalSuperficie.toFixed(2) + ' unidade²';
    document.getElementById('apotema-base').textContent = apotemaBase.toFixed(2) + ' unidade';
    document.getElementById('apotema-altura').textContent = apotemaPiramide.toFixed(2) + ' unidade';
});
//TUDO CERTO