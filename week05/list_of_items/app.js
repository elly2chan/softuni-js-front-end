function addItem() {
    input = document.getElementById('newItemText').value;
    newItem = document.getElementById('items').appendChild(document.createElement('li'));
    newItem.textContent = input;
    document.getElementById('newItemText').value = '';
}