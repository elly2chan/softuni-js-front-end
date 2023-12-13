function deleteByEmail() {
    input = document.getElementsByTagName('input')[0].value;
    rows = document.querySelectorAll('tbody tr td');
    result = document.getElementById('result');
    
    for (row of rows) {
        if (row.textContent === input) {
            result.textContent = 'Deleted.';
            row.parentElement.remove();
            break;
        } else {
            result.textContent = 'Not found.'
        }
    }
}