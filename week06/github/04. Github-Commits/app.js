function loadCommits() {
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const commits = document.getElementById('commits');
    const BASE_URL = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(BASE_URL, {method: 'GET'})
    .then(response => response.json())
    .then(data => 
        data.forEach(commit => {
            const li = document.createElement('li');
            li.textContent = `${commit.author.login}: ${commit.commit.message}`;
            commits.appendChild(li);
        }))
    .catch(err => {
        const error = document.createElement('li');
        error.textContent = `"Error: ${err.status} (Not Found)"`
        commits.appendChild(error);
    });
    


}