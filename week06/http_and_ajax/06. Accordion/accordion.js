function solution() {
    const BASE_URL = 'http://localhost:3030/jsonstore/advanced/articles/';
    
    body = document.getElementById('main');

    loadData();

    async function loadData() {
        response = await fetch(BASE_URL + 'list', { method: 'GET' });
        data = await response.json();

        for (article of Object.values(data)) {
            accordionDiv = document.createElement('div');
            headDiv = document.createElement('div');
            span = document.createElement('span');
            btn = document.createElement('button');
            extraDiv = document.createElement('div');
            p = document.createElement('p');

            accordionDiv.className = 'accordion';
            headDiv.className = 'head';
            span.textContent = article.title;
            btn.className = 'button';
            btn.id = article._id;
            btn.textContent = 'MORE'
            btn.addEventListener('click', loadMore);
            extraDiv.className = 'extra';
            extraDiv.style.display = 'none';
            p.textContent = 'test';

            headDiv.appendChild(span);
            headDiv.appendChild(btn);
            extraDiv.appendChild(p);
            accordionDiv.appendChild(headDiv);
            accordionDiv.appendChild(extraDiv);
            body.appendChild(accordionDiv);
        }
    }

    async function loadMore(e) {
        btn = e.currentTarget;
        id = btn.id;
        hiddenInfo = btn.parentElement.parentElement.getElementsByTagName('div')[1];

        response = await fetch(BASE_URL + 'details/' + id, { method: 'GET' });
        data = await response.json();

        if (btn.textContent === 'MORE') {
            btn.textContent = 'LESS';
            hiddenInfo.style.display = 'block';
            hiddenInfo.getElementsByTagName('p')[0].textContent = data.content;
        } else {
            btn.textContent = 'MORE';
            hiddenInfo.style.display = 'none';
        }
    }
}

solution();