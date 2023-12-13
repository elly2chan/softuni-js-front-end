function validate() {
    email = document.getElementById('email');

    email.addEventListener('change', validateEmail);

    function validateEmail(e) {
        re = /^\S+@\S+\.\S+$/;
        if (!re.test(e.currentTarget.value)) {
            e.target.className = 'error';
        } else {
            e.target.className = '';
        }
    }
}
