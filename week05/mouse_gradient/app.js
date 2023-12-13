function attachGradientEvents() {
    gradient = document.getElementById('gradient');
    result = document.getElementById('result');

    gradient.addEventListener('mousemove', onMove);
    gradient.addEventListener('mouseout', onOut);

    function onMove(e) {
        power = e.offsetX / (e.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        result.textContent = `${power}%`;
    }

    function onOut() {
        result.textContent = '';
    }
}