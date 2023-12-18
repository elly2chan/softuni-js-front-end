function loadRepos() {
	const username = document.getElementById('username').value;
	const BASE_URL = 'https://api.github.com/users/' + `${username}/repos`;
	const ulList = document.getElementById('repos');
	ulList.textContent = '';

	fetch(BASE_URL, { method: 'GET' })
	.then(response => response.json())
	.then(data => {
		data.forEach(repo => {
			const li = document.createElement('li');
			const a = document.createElement('a');
			a.href = repo.html_url;
			a.textContent = repo.full_name;

			li.appendChild(a);
			ulList.appendChild(li);
		})
	})
	.catch(err => {
		const errorItem = document.createElement('li');
		errorItem.textContent = `Error: ${err.message}`;
		ulList.appendChild(errorItem);
	})
}