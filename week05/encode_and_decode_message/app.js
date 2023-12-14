function encodeAndDecodeMessages() {
    buttons = Array.from(document.getElementsByTagName('button'));
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    textAreas = document.getElementsByTagName('textarea');

    function encode() {
        message = textAreas[0].value;
        result = '';
        for (char of message) {
            char = String.fromCharCode(char.charCodeAt(0) + 1);
            result += char;
        }
        textAreas[1].value = result;
        textAreas[0].value = '';
    }

    function decode() {
        message = textAreas[1].value;
        result = '';
        for (char of message) {
            char = String.fromCharCode(char.charCodeAt(0) - 1);
            result += char;
        }
        textAreas[1].value = result;
    }
}