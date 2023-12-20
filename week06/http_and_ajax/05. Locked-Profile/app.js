function lockedProfile() {
    const BASE_URL = 'http://localhost:3030/jsonstore/advanced/profiles';

    let body = document.getElementById('main');

    async function loadData() {
        let response = await fetch(BASE_URL, { method: 'GET' });
        let data = await response.json();
        let counter = 1;

        body.innerHTML = '';

        for ([_id, profile] of Object.entries(data)) {
            let username = profile.username;
            let email = profile.email;
            let age = profile.age;

            // DOM MANIPULATIONS
            let div = document.createElement('div');
            let img = document.createElement('img');
            let lockLabel = document.createElement('label');
            let lockInput = document.createElement('input');
            let unlockLabel = document.createElement('label');
            let unlockInput = document.createElement('input');
            let br = document.createElement('br');
            let hr1 = document.createElement('hr');
            let usernameLabel = document.createElement('label');
            let usernameInput = document.createElement('input');
            let hr2 = document.createElement('hr');
            let hiddenDiv = document.createElement('div');
            let emailLabel = document.createElement('label');
            let emailInput = document.createElement('input');
            let ageLabel = document.createElement('label');
            let ageInput = document.createElement('input');
            let showMoreBtn = document.createElement('button');

            div.className = 'profile';
            img.src = './iconProfile2.png';
            img.className = 'userIcon';
            lockLabel.textContent = 'Lock';
            lockInput.type = 'radio';
            lockInput.name = `user${counter}Locked`;
            lockInput.value = 'lock';
            lockInput.checked = true;
            unlockLabel.textContent = 'Unlock';
            unlockInput.type = 'radio';
            unlockInput.name = `user${counter}Locked`;
            unlockInput.value = 'unlock';
            usernameLabel.textContent = 'Username';
            usernameInput.type = 'text';
            usernameInput.name = `user${counter}Username`;
            usernameInput.value = username;
            usernameInput.disabled = true;
            usernameInput.readonly = true;
            hiddenDiv.className = `user${counter}Username`;
            hiddenDiv.style.display = 'none';
            emailLabel.textContent = 'Email:';
            emailInput.type = 'email';
            emailInput.name = `user${counter}Email`;
            emailInput.value = email;
            emailInput.disabled = true;
            emailInput.readonly = true;
            ageLabel.textContent = 'Age:';
            ageInput.type = 'email';
            ageInput.name = `user${counter}Age`;
            ageInput.value = age;
            ageInput.disabled = true;
            ageInput.readOnly = true;
            showMoreBtn.textContent = 'Show more'
            showMoreBtn.addEventListener('click', showMore);
            
            div.appendChild(img);
            div.appendChild(lockLabel);
            div.appendChild(lockInput);
            div.appendChild(unlockLabel);
            div.appendChild(unlockInput);
            div.appendChild(br);
            div.appendChild(hr1);
            div.appendChild(usernameLabel);
            div.appendChild(usernameInput);
            hiddenDiv.appendChild(hr2);
            hiddenDiv.appendChild(emailLabel);
            hiddenDiv.appendChild(emailInput);
            hiddenDiv.appendChild(ageLabel);
            hiddenDiv.appendChild(ageInput);
            div.appendChild(hiddenDiv);
            div.appendChild(showMoreBtn);
            body.appendChild(div);
            
            counter++;
        }
        
    }
    loadData();

    function showMore(e) {
        let currentProfile = e.currentTarget.parentElement;
        let hiddenInfo = currentProfile.getElementsByTagName('div')[0];
        let locked =  currentProfile.getElementsByTagName('input')[0];
        
        if (locked.checked) {
            return;
        }

        if (e.currentTarget.textContent === 'Show more') {
            hiddenInfo.style.display = 'block';
            e.currentTarget.textContent = 'Show less';
        } else {
            hiddenInfo.style.display = 'none';
            e.currentTarget.textContent = 'Show more';
        }

    }
}