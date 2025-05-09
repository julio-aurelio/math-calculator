document.getElementById('calcular').addEventListener('click', function () {
  const lado = parseFloat(document.getElementById('lado').value);
  const lados = parseInt(document.getElementById('lados').value);
  const altura = parseFloat(document.getElementById('altura').value);

  if (!lado || !altura || !lados) {
      alert('Por favor, preencha todos os campos.');
      return;
  }

  if (isNaN(lado) || isNaN(altura) || isNaN(lados)) {
      alert('Por favor, insira valores numéricos válidos.');
      return;
  }

  if (lados < 3) {
      alert('O número de lados da base deve ser 3 ou mais.');
      return;
  }

  if (lado <= 0 || altura <= 0) {
      alert('Os valores devem ser maiores que zero.');
      return;
  }

  let areaBase;

  if (lados === 3) {
      areaBase = (lado * lado * Math.sqrt(3)) / 4;
  } else if (lados > 4) {
      areaBase = lados * ((lado * lado * Math.sqrt(3)) / 4);
  } 
  const volume = areaBase * altura;
  const perimetroBase = lados * lado;
  const perimetroTotal = (perimetroBase * 2) + (lados* altura); 
  const areaLateral = perimetroBase * altura;
  const areaTotal = (2 * areaBase) + areaLateral;

  document.getElementById('volume').textContent = volume.toFixed(2) + ' unidade³';
  document.getElementById('perimetro').textContent = perimetroTotal.toFixed(2) + ' unidade';
  document.getElementById('area-total').textContent = areaTotal.toFixed(2) + ' unidade²';
});

// TUDO CERTO