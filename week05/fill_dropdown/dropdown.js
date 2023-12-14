function addItem() {
    menu = document.getElementById('menu');

    text = document.getElementById('newItemText');
    value = document.getElementById('newItemValue');
    
    newOption = document.createElement('option');
    newOption.textContent = text.value;
    newOption.value = value.value;
    
    menu.appendChild(newOption);
    text.value = '';
    value.value = '';
}