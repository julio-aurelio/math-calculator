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
    if (raio <= 0 ) {
        alert('Os valores devem ser maiores que zero.');
        return;
    }

    const pi = Math.PI;

    const areaCircunferencia = pi * Math.pow(raio, 2);
    const areaSuperficie = 4 * pi * Math.pow(raio, 2);

    document.getElementById('area-circunferencia').textContent = areaCircunferencia.toFixed(2) + ' cm²';
    document.getElementById('area-superfice').textContent = areaSuperficie.toFixed(2) + ' cm²';
});
//TUDO CERTO