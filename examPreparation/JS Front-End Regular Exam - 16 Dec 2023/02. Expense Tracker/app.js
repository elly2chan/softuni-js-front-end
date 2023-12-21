function solve() {
    inputForm = document.getElementsByTagName('form')[0];
    expense = document.getElementById('expense');
    amount = document.getElementById('amount');
    date = document.getElementById('date');
    
    addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', addRecord);
    deleteBtn = document.querySelector('#expenses > button')
    deleteBtn.addEventListener('click', deleteRecord);

    previewList = document.getElementById('preview-list');
    expensesList = document.getElementById('expenses-list');


    function addRecord() {
        if (expense.value === '' || amount.value === '' || date.value === '') {
            return;
        }

        // DOM MANIPULATIONS
        li = document.createElement('li');
        li.className = 'expense-item';
        article = document.createElement('article');
        type = document.createElement('p');
        type.textContent = `Type: ${expense.value}`;
        sum = document.createElement('p');
        sum.textContent = `Amount: ${amount.value}$`;
        day = document.createElement('p');
        day.textContent = `Date: ${date.value}`;
        div = document.createElement('div');
        div.className = 'buttons';
        editBtn = document.createElement('button');
        editBtn.className = 'btn edit';
        editBtn.textContent = 'edit';
        editBtn.addEventListener('click', editRecord);
        okBtn = document.createElement('button');
        okBtn.className = 'btn ok';
        okBtn.textContent = 'ok';
        okBtn.addEventListener('click', moveRecord);

        div.appendChild(editBtn);
        div.appendChild(okBtn);
        article.appendChild(type);
        article.appendChild(sum);
        article.appendChild(day);
        li.appendChild(article);
        li.appendChild(div);

        previewList.appendChild(li);

        addBtn.disabled = true;
        inputForm.reset();
    }

    function editRecord(e) {
        currentRecord = e.currentTarget.parentElement.parentElement;
        info = currentRecord.querySelectorAll('article > p');
        expense.value = info[0].textContent.split(': ')[1];
        amount.value = info[1].textContent.split(': ')[1].replace('$', '');
        date.value = info[2].textContent.split(': ')[1];
        currentRecord.remove();
        addBtn.disabled = false;
    }

    function moveRecord(e) {
        currentRecord = e.currentTarget.parentElement.parentElement;
        currentRecordBtns = e.currentTarget.parentElement;
        currentRecordBtns.remove();
        currentRecord.remove();
        expensesList.appendChild(currentRecord);
        addBtn.disabled = false;
    }

    function deleteRecord() {
        location.reload();
    }
}

solve();