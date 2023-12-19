function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger';
    
    let submitBtn = document.getElementById('submit');
    let refreshBtn = document.getElementById('refresh');

    submitBtn.addEventListener('click', submit);
    refreshBtn.addEventListener('click', refresh);

    let inputs = document.querySelectorAll('input');

    async function submit() {
        let author = inputs[0].value;
        let content = inputs[1].value;

        let message = { author, content };
        await fetch(BASE_URL, 
            { method: 'POST', headers: { "Content-type": "application/json" }, body: JSON.stringify(message) })
    }

    let messages = document.getElementById('messages');

    async function refresh() {
        let response = await fetch(BASE_URL, { method: 'GET' });
        let data = await response.json();
        
        let result = '';
        for ([key, value] of Object.entries(data)) {
            result += `${value.author}: ${value.content}` + '\n';
        }
        messages.textContent = result.trim();
    }


}

attachEvents();