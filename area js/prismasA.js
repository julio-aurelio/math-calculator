
  document.getElementById('calcular').addEventListener('click', function() {
    const lado = parseFloat(document.getElementById('lado').value);
    const  lados = parseFloat(document.getElementById('lados').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (
      lado === '' || altura === '' || lados === '' ||
      isNaN(lado) || isNaN(altura) || isNaN(lados)
  ) {
      alert('Por favor, preencha todos os campos com valores numéricos válidos.');
      return;
  }
  
  if (lado <=0 || altura <=0  || lados <=0 ) {
      alert('Os valores devem ser maiores que zero.');
      return;
  }

  let areaBase;

  if (lados === 3) {
      areaBase = (lado * lado * Math.sqrt(3)) / 4;
  } else if (lados > 4) {
      areaBase = lados * ((lado * lado * Math.sqrt(3)) / 4);
  } 

 
 
    const areaLateral = lados * (lado*altura);
    const areaTotal = (2*areaBase) + areaLateral;



    


    document.getElementById('area-base').textContent = areaBase.toFixed(2) + 'm²';
    document.getElementById('area-lateral-total').textContent = areaLateral.toFixed(2) + 'm²';
    document.getElementById('area-total').textContent = areaTotal.toFixed(2) + 'm²';
});
//TUDO CERTO
