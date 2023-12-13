function focused() {
text = document.getElementsByTagName('input');
    
    for (txt of text) {
        txt.addEventListener('focus', highlight);
        txt.addEventListener('blur', unhighlight);
    }

    function highlight(e) {
        e.currentTarget.parentElement.className = 'focused';
    }

    function unhighlight(e) {
        e.target.parentElement.className = '';
    }
}