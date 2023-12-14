function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(btn => {
        btn.addEventListener('click', showBtn);
    });

    function showBtn(e) {
        btn = e.target;
        profile = btn.parentElement;

        profileUnlocked = profile.children[4];
        hiddenInfo = profile.children[9];

        if (!profileUnlocked.checked) {
            return;
        }

        if (btn.textContent === 'Show more') {
            hiddenInfo.style.display = 'block';
            btn.textContent = 'Hide it';
        } else {
            hiddenInfo.style.display = 'none';
            btn.textContent = 'Show more';
        }
    }
}