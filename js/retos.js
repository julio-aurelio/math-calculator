document.getElementById('calcular').addEventListener('click', function () {
  const comprimento = parseFloat(document.getElementById('comprimento').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const largura = parseFloat(document.getElementById('largura').value);

  if (!comprimento || !altura || !largura) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  if (isNaN(comprimento) || isNaN(altura) || isNaN(largura)) {
    alert('Por favor, insira valores numéricos válidos.');
    return;
  }

  if (comprimento <= 0 || altura <= 0 || largura <= 0) {
    alert('Os valores devem ser maiores que zero.');
    return;
  }

  // Cálculo do volume
  const volume = comprimento * altura * largura;

  // Soma total das arestas (12 arestas no total)
  const perimetroTotalArestas = 4 * (comprimento + altura + largura);

  // Área da superfície total: 2(ab + ac + bc)
  const areaSuperficieTotal = 2 * (
    comprimento * largura +
    comprimento * altura +
    largura * altura
  );

  document.getElementById('volume').textContent = volume.toFixed(2) + ' unidade³';
  document.getElementById('perimetro-total').textContent = perimetroTotalArestas.toFixed(2) + ' unidade';
  document.getElementById('area-total').textContent = areaSuperficieTotal.toFixed(2) + ' unidade²';
});

// TUDO CERTO