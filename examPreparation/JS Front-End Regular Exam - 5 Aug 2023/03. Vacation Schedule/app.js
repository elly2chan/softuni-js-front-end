function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

    let inputForm = document.getElementsByTagName('form')[0];
    let nameInput = document.getElementById('name');
    let numDaysInput = document.getElementById('num-days');
    let fromDateInput = document.getElementById('from-date');

    let addRecordBtn = document.getElementById('add-vacation');
    addRecordBtn.addEventListener('click', addRecord);
    let editRecordBtn = document.getElementById('edit-vacation');
    editRecordBtn.addEventListener('click', editRecord);
    let loadRecordBtn = document.getElementById('load-vacations');
    loadRecordBtn.addEventListener('click', loadRecords);

    let vacationsList = document.getElementById('list');

    async function loadRecords() {
        let response = await fetch(BASE_URL);
        let data = await response.json();

        for (record of Object.values(data)) {
            vacationsList.innerHTML +=
            `
            <div class="container">
                <h2>${record.name}</h2>
                <h3>${record.days}</h3>
                <h3>${record.date}</h3>
                <button class="change-btn">Change</button>
                <button class="done-btn">Done</button>
            </div>
            `
        }
    }

    async function addRecord() {
        
    }

    async function editRecord() {

    }

}

solve();