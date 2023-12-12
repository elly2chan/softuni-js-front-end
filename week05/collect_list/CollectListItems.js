function extractText() {
    items = document.getElementsByTagName('li');
    result = [];

    for (item of items) {
        result.push(item.textContent);
    }

    textAreaElement = document.getElementById('result');
    textAreaElement.textContent = result.join('\n');
}