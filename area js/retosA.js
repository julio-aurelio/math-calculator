document.getElementById('calcular').addEventListener('click', function() {
  const comprimento = parseFloat(document.getElementById('comprimento').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const largura = parseFloat(document.getElementById('largura').value);

  if (
      comprimento === '' || altura === '' || largura === '' ||
      isNaN(comprimento) || isNaN(altura) || isNaN(largura)
  ) {
      alert('Por favor, preencha todos os campos com valores numéricos válidos.');
      return;
  }

  if (comprimento <=0 || altura <= 0 || largura <= 0) {
      alert('Os valores devem ser maiores que zero.');
      return;
  }

  const areaBase = comprimento * largura;

  const areaLateral = 2 * (altura * comprimento) + 2 * (altura * largura);

  const areaTotal = 2 * areaBase + areaLateral;

  document.getElementById('area-base').textContent = areaBase + ' m²';
  document.getElementById('area-lateral').textContent = areaLateral + ' m²';
  document.getElementById('area-total').textContent = areaTotal + ' m²';
});
//TUDO CERTO