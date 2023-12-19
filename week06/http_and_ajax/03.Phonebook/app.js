function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/';

    document.getElementById('btnLoad').addEventListener('click', loadData);
    document.getElementById('btnCreate').addEventListener('click', createRecord);
    
    let phonebook = document.getElementById('phonebook');

    async function loadData() {
        try {
            phonebook.innerHTML = '';

            let response = await fetch(BASE_URL, { method: 'GET' });
            let data = await response.json();

            for ([key, value] of Object.entries(data)) {
                let li = document.createElement('li');
                li.textContent = `${value.person}: ${value.phone}`;

                let btn = document.createElement('button');
                btn.value = key;
                btn.textContent = 'Delete';
                btn.addEventListener('click', deleteRecord);

                li.appendChild(btn);
                phonebook.appendChild(li);
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function createRecord() {
        try {
            let person = document.getElementById('person').value;
            let phone = document.getElementById('phone').value;
            let message = { person, phone };

            await fetch(BASE_URL, 
                { method: 'POST', headers: { "Content-type": "application/json" }, body: JSON.stringify(message) })
            loadData();
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteRecord(e) {
        try {
            id = e.currentTarget.value;
            await fetch(BASE_URL + id, { method: 'DELETE' });
            loadData();
        } catch (error) {
            console.error(error);
        }
    }
}

attachEvents();