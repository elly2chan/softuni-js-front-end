function attachEventsListeners() {
    button = document.getElementById('convert');
    button.addEventListener('click', convert);

    units = {
        "km": 1000,
        "m": 1,
        "cm": 0.01,
        "mm": 0.001,
        "mi": 1609.34,
        "yrd": 0.9144,
        "ft": 0.3048,
        "in": 0.0254
    }

    function convert() {
        input = Number(document.getElementById('inputDistance').value);
        inputUnits = document.getElementById('inputUnits').value;
        output = document.getElementById('outputDistance');
        outputUnits = document.getElementById('outputUnits').value;
        
        inputUnitsValue = units[inputUnits];
        outputUnitsValue = units[outputUnits];
        res = inputUnitsValue * input / outputUnitsValue;
        output.value = res;
    }
}