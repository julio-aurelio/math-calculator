document.getElementById('calcular').addEventListener('click', function() {
    const raio = parseFloat(document.getElementById('raio').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    if (
        raio === '' || altura === '' 
    ) {
        alert('Por favor, preencha todos os campos com valores numéricos válidos.');
        return;
    }
    if (isNaN(raio) ) {
        alert('Por favor, insira valores numéricos válidos.');
        return;
    }
    if (raio <= 0 || altura <=0) {
        alert('Os valores devem ser maiores que zero.');
        return;
    }



    const areaBase = 3.14 * Math.pow(raio, 2);
    const perimetroCircuferencia = 2 * 3.14 * raio;
    const volume = areaBase * altura;
    const areaLateral = 2 * 3.14 * raio * altura;
    const areaTotal = 2 * areaBase + areaLateral;

    document.getElementById('volume').textContent = volume.toFixed(2) + ' unidade³';
    document.getElementById('perimetro-total').textContent = perimetroCircuferencia.toFixed(2) + ' unidade';
    document.getElementById('area-total').textContent = areaTotal.toFixed(2) + ' unidade²';
});
//TUDO CERTO