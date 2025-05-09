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
    const areaBase = ladoBase * ladoBase;
    const apotemaPiramide = Math.sqrt(Math.pow(altura, 2) + Math.pow(ladoBase / 2, 2));

    const arestaLateral = Math.sqrt(Math.pow(altura, 2) + 2 * Math.pow(ladoBase / 2, 2)); 
    const perimetroBase = 4 * ladoBase;
    const areaLateralTotal = 4 * (0.5 * ladoBase * apotemaPiramide);
    
    const areaTotalSuperficie = areaBase + areaLateralTotal;
    const volume = (areaBase * altura) / 3;
    const perimetroTotalArestas = perimetroBase + (4 * arestaLateral);

    document.getElementById('volume').textContent = volume.toFixed(2) + ' cm³';
    document.getElementById('perimetro-total').textContent = perimetroTotalArestas.toFixed(2) + ' cm';
    document.getElementById('area-total').textContent = areaTotalSuperficie.toFixed(2) + ' cm²';
});
//TUDO CERTO