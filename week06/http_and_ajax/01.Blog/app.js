function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/blog/'
    let btnLoadPosts = document.getElementById('btnLoadPosts');
    let btnViewPost = document.getElementById('btnViewPost');

    btnLoadPosts.addEventListener('click', loadPosts);
    btnViewPost.addEventListener('click', loadComments);

    let posts = document.getElementById('posts');
    
    async function loadPosts() {
        posts.innerHTML = '';
        let url = BASE_URL + 'posts';
        response = await fetch(url, {method: 'GET'});
        allPosts = await response.json();
        for ([key, value] of Object.entries(allPosts)) {
            opt = document.createElement('option');
            opt.value = key;
            opt.textContent = value.title.toUpperCase();
            posts.appendChild(opt);
        }
    }

    let postTitle = document.getElementById('post-title');
    let postBody = document.getElementById('post-body');
    let postComments = document.getElementById('post-comments');

    async function loadComments() {
        postTitle.innerHTML = '';
        postBody.innerHTML = '';
        postComments.innerHTML = '';

        let postId = posts.value;
        let header = allPosts[postId].title;
        let url = BASE_URL + 'comments/';
        
        response = await fetch(url, {method: 'GET'});
        data = await response.json();

        title = document.createElement('h1');
        title.textContent = header;
        postTitle.appendChild(title);
        postBody.textContent = allPosts[postId].body;

        for ([key, value] of Object.entries(data)) {
            if (value.postId === postId) {
                li = document.createElement('li');
                li.textContent = value.text;
                postComments.appendChild(li);
            }
        }
    }

}

attachEvents();