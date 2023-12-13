function addItem() {
    input = document.getElementById('newItemText').value;
    del = document.createElement('a');
    del.textContent = '[Delete]';
    del.href = '#';

    newItem = document.getElementById('items').appendChild(document.createElement('li'));
    newItem.textContent = input;
    newItem.appendChild(del);
    document.getElementById('newItemText').value = '';

    del.addEventListener('click', deleteItem)
    function deleteItem(el) {
        el.currentTarget.parentElement.remove();
    }
}