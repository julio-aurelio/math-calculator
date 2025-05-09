document.getElementById('calcular').addEventListener('click', function() {
    const raio = parseFloat(document.getElementById('raio').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
     if (
        raio === '' || altura === '' 
    ) {
        alert('Por favor, preencha todos os campos com valores numéricos válidos.');
        return;
    }
    if (isNaN(raio) || isNaN(altura) ) {
        alert('Por favor, insira valores numéricos válidos.');
        return;
    }
    if (raio <= 0 || altura <=0) {
        alert('Os valores devem ser maiores que zero.');
        return;
    }

    const pi = Math.PI;  
    const areaBase = pi * Math.pow(raio, 2);
    const areaLateral = 2 * pi * raio * altura;
    const areaTotal = (2 * areaBase) + areaLateral;

    document.getElementById('areaBase').textContent = areaBase.toFixed(2) + ' cm²';
    document.getElementById('areaLateral').textContent = areaLateral.toFixed(2) + ' cm²';
    document.getElementById('area-total').textContent = areaTotal.toFixed(2) + ' cm²';
});
//TUDO CERTO