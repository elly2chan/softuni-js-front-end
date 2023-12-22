window.addEventListener("load", solve);

function solve() {
    let inputForm = document.getElementsByTagName('form')[0];
    let inputPlace = document.getElementById('place');
    let inputAction = document.getElementById('action');
    let inputPerson = document.getElementById('person');
    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addRecord);

    let taskList = document.getElementById('task-list');
    let doneList = document.getElementById('done-list');

    function addRecord() {
        taskList.innerHTML +=
        `
        <li class="clean-task">
            <article>
                <p>Place:${inputPlace.value}</p>
                <p>Action:${inputAction.value}</p>
                <p>Person:${inputPerson.value}</p>
            </article>
            <div class="buttons">
                <button class="edit">Edit</button>
                <button class="done">Done</button>
            </div>
        </li>
        `
        let buttons = taskList.querySelectorAll('li > div > button');
        let editBtn = buttons[0];
        let doneBtn = buttons[1];

        editBtn.addEventListener('click', editRecord);
        doneBtn.addEventListener('click', moveRecord);

        inputForm.reset();
    }

    function editRecord(e) {
        let currentRecord = e.currentTarget.parentElement.parentElement;
        currentRecord.remove();

        let info = currentRecord.querySelectorAll('article > p');
        let place = info[0].textContent.split(':')[1];
        let action = info[1].textContent.split(':')[1];
        let person = info[2].textContent.split(':')[1];

        inputPlace.value = place;
        inputAction.value = action;
        inputPerson.value = person;
    }

    function moveRecord(e) {
        let currentRecord = e.currentTarget.parentElement.parentElement;
        currentRecord.remove();

        let info = currentRecord.querySelectorAll('article > p');
        let place = info[0].textContent;
        let action = info[1].textContent;
        let person = info[2].textContent;

        doneList.innerHTML +=
        `
        <li>
            <article>
                <p>${place}</p>
                <p>${action}</p>
                <p>${person}</p>
            </article>
            <button class="delete">Delete</button>
        </li>
        `

        let deleteBtn = doneList.querySelector('button');
        deleteBtn.addEventListener('click', deleteRecord);
    }

    function deleteRecord(e) {
        let currentRecord = e.currentTarget.parentElement;
        currentRecord.remove();
    }
}