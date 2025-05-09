document.getElementById('calcular').addEventListener('click', function() {
    const raio = parseFloat(document.getElementById('raio').value);
    
    if (
        raio === ''  
  
      ) {
        alert('Por favor, preencha todos os campos com valores numéricos válidos.');
        return;
    }

    if (isNaN(raio) ) {
        alert('Por favor, insira valores numéricos válidos.');
        return;
    }
    
    if (raio <= 0) {
        alert('Os valores devem ser maiores que zero.');
        return;
    }

    
    const volume = (4/3) * 3.14 * Math.pow(raio, 3) ;
    const perimetroCircuferencia = 2 * 3.14 * raio;
    const areaTotal = 4 * 3.14 * (Math.pow(raio, 2));

    

    document.getElementById('volume').textContent = volume.toFixed(2) + ' unidade³';
    document.getElementById('perimetro-total').textContent = perimetroCircuferencia.toFixed(2) + ' unidade';
    document.getElementById('area-total').textContent = areaTotal.toFixed(2) + ' unidade²';
});
//TUDO CERTO