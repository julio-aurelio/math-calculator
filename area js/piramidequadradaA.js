document.getElementById('calcular').addEventListener('click', function () {
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const altura = parseFloat(document.getElementById('altura').value);

    
    if (
      comprimento === '' || altura === '' 
 
  ) {
      alert('Por favor, preencha todos os campos com valores numéricos válidos.');
      return;
  }
    if (isNaN(comprimento) || isNaN(altura)) {
        alert('Por favor, insira valores numéricos válidos.');
        return;
    }

    if (comprimento <= 0 || altura <= 0) {
        alert('Os valores devem ser maiores que zero.');
        return;
    }

    const ladoBase = comprimento;

    const apotemaBase = ladoBase / 2;

    const areaBase = ladoBase * ladoBase;

    const apotemaPiramide = Math.sqrt(Math.pow(altura, 2) + Math.pow(apotemaBase, 2));


    const areaLateralTotal = 4 * (0.5 * ladoBase * apotemaPiramide);

    const areaTotalSuperficie = areaBase + areaLateralTotal;

    document.getElementById('area-base').textContent = areaBase.toFixed(2) + ' m²';
    document.getElementById('area-lateral-total').textContent = areaLateralTotal.toFixed(2) + ' m²';
    document.getElementById('area-total').textContent = areaTotalSuperficie.toFixed(2) + ' m²';
    document.getElementById('apotema-base').textContent = apotemaBase.toFixed(2) + ' m';
    document.getElementById('apotema-altura').textContent = apotemaPiramide.toFixed(2) + ' m';

});

//TUDO CERTO