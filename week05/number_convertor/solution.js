function solve() {

    function addOptions(value, text) {
        toOptions = document.getElementById('selectMenuTo');
        options = document.createElement('option');
        options.value = value;
        options.textContent = text;
        toOptions.appendChild(options);
    }

    addOptions("binary", "Binary");
    addOptions("hexadecimal", "Hexadecimal");
    
    button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', function () {
        input = document.getElementById('input');
        toNumber = Number(input.value);

        selectMenuTo = document.getElementById('selectMenuTo');
        result = document.getElementById('result');

        if (selectMenuTo.value === 'binary') {
            toNumber = toNumber.toString(2);
        } else if (selectMenuTo.value === 'hexadecimal') {
            toNumber = toNumber.toString(16).toUpperCase();
        }

        result.value = toNumber;
    });
}