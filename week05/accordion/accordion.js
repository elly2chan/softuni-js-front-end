function toggle() {
    button = document.getElementsByClassName("button")[0].textContent;
    displayStyle = document.querySelector('#extra').style.display;

    if (!displayStyle || displayStyle === 'none') {
        document.querySelector('#extra').style.display = 'block';
        document.getElementsByClassName("button")[0].textContent = 'Less';
    } else {
        document.querySelector('#extra').style.display = 'none';
        document.getElementsByClassName("button")[0].textContent = 'More';
    }
}