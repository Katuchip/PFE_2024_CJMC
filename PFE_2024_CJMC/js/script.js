document.getElementById('formulario-calorias').addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const tiempo = parseFloat(document.getElementById('tiempo').value);
    const actividad = parseFloat(document.querySelector('input[name="actividad"]:checked').value);
    const resultadoDiv = document.getElementById('resultado');

    if (peso < 1 || peso > 120) {
        resultadoDiv.classList.replace('alert-primary', 'alert-danger');
        resultadoDiv.textContent = 'El peso debe estar entre 1 y 120 kg.';
        return;
    }

    if (tiempo < 5 || tiempo > 150) {
        resultadoDiv.classList.replace('alert-primary', 'alert-danger');
        resultadoDiv.textContent = 'El tiempo debe estar entre 5 y 150 minutos.';
        return;
    }

    const calorias = (actividad * 3.5 * peso * (tiempo / 200)).toFixed(2);
    resultadoDiv.classList.replace('alert-danger', 'alert-primary');
    resultadoDiv.textContent = `Calorías quemadas: ${calorias} calorías`;
});