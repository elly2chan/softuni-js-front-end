window.addEventListener("load", solve);

function solve() {
    let inputForm = document.getElementsByTagName('form')[0];
    let taskTitle = document.getElementById('task-title');
    let taskCategory = document.getElementById('task-category');
    let taskContent = document.getElementById('task-content');
    let publishBtn = document.getElementById('publish-btn');
    publishBtn.addEventListener('click', publishRecord);

    let reviewList = document.getElementById('review-list');
    let publishedList = document.getElementById('published-list');

    function publishRecord() {

        if (taskTitle.value == '' || taskCategory.value == '' || taskContent.value == '') {
            return;
        }

        reviewList.innerHTML +=
        `
        <li class="rpost">
            <article>
                <h4>${taskTitle.value}</h4>
                <p>Category: ${taskCategory.value}</p>
                <p>Content: ${taskContent.value}</p>
            </article>
            <button class="action-btn edit">Edit</button>
            <button class="action-btn post">Post</button>
        </li>
        `
        let buttons = reviewList.querySelectorAll('li > button');
        let editBtn = buttons[0];
        editBtn.addEventListener('click', editRecord);
        let postBtn = buttons[1];
        postBtn.addEventListener('click', postRecord);
        inputForm.reset();
    }

    function editRecord(e) {
        reviewList.innerHTML = '';

        let currentRecord = e.currentTarget.parentElement;
        currentRecord.remove();

        let title = currentRecord.querySelector('article > h4').textContent;
        let category = currentRecord.querySelectorAll('article > p')[0].textContent.split(': ')[0];
        let content = currentRecord.querySelectorAll('article > p')[1].textContent.split(': ')[0];

        taskTitle.value = title;
        taskCategory.value = category;
        taskContent.value = content;
    }

    function postRecord(e) {
        reviewList.innerHTML = '';
        
        let currentRecord = e.currentTarget.parentElement;
        currentRecord.remove();
        let buttons = currentRecord.querySelectorAll('li > button');
        let editBtn = buttons[0];
        let postBtn = buttons[1];
        editBtn.remove();
        postBtn.remove();
        publishedList.appendChild(currentRecord);
    }
}