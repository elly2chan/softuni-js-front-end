function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    
    inputForm = document.getElementsByTagName('form')[0];
    foodInput = document.getElementById('food');
    timeInput = document.getElementById('time');
    caloriesInput = document.getElementById('calories');
    addMealBtn = document.getElementById('add-meal');
    addMealBtn.addEventListener('click', addRecord);
    editMealBtn = document.getElementById('edit-meal');
    editMealBtn.addEventListener('click', editRecord);

    mealsList = document.getElementById('list');
    loadMealsBtn = document.getElementById('load-meals');
    loadMealsBtn.addEventListener('click', loadRecords);
    
    async function loadRecords() {
        mealsList.innerHTML = '';

        response = await fetch(BASE_URL);
        data = await response.json();

        for (meal of Object.values(data)) {
            mealRecordDiv = document.createElement('div');
            mealRecordDiv.className = 'meal';
            foodTitle = document.createElement('h2');
            foodTitle.textContent = meal.food;
            time = document.createElement('h3');
            time.textContent = meal.time;
            calories = document.createElement('h3');
            calories.textContent = meal.calories;
            mealBtnsDiv = document.createElement('div');
            mealBtnsDiv.id = 'meal-buttons';
            changeMealBtn = document.createElement('button');
            changeMealBtn.className = 'change-meal';
            changeMealBtn.textContent = 'Change';
            changeMealBtn.id = meal._id;
            changeMealBtn.addEventListener('click', changeRecord);
            deleteMealBtn = document.createElement('button');
            deleteMealBtn.className = 'delete-meal';
            deleteMealBtn.textContent = 'Delete';
            deleteMealBtn.addEventListener('click', deleteRecord);

            mealBtnsDiv.appendChild(changeMealBtn);
            mealBtnsDiv.appendChild(deleteMealBtn);
            mealRecordDiv.appendChild(foodTitle);
            mealRecordDiv.appendChild(time);
            mealRecordDiv.appendChild(calories);
            mealRecordDiv.appendChild(mealBtnsDiv);
            
            mealsList.appendChild(mealRecordDiv);
        }
    }
    
    async function addRecord() {
        food = foodInput.value;
        time = timeInput.value;
        calories = caloriesInput.value;
    
        if (food === '' || time === '' || calories === '') {
            return;
        }

        message = { food, time, calories };
    
        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message)
        });

        inputForm.reset();
        loadRecords();
    }

    function changeRecord(e) {
        currentRecord = e.currentTarget.parentElement.parentElement;
        currentRecord.remove();
        food = currentRecord.getElementsByTagName('h2')[0].textContent;
        time = currentRecord.getElementsByTagName('h3')[0].textContent;
        calories = currentRecord.getElementsByTagName('h3')[1].textContent;

        foodInput.value = food;
        foodInput.id = e.currentTarget.id;
        timeInput.value = time;
        caloriesInput.value = calories;
        addMealBtn.disabled = true;
        editMealBtn.disabled = false;
    }

    async function editRecord(e) {
        currentRecord = e.currentTarget.parentElement.parentElement;
        _id = currentRecord.querySelector('form > input').id;

        food = foodInput.value;
        time = timeInput.value;
        calories = caloriesInput.value;

        if (food === '' || time === '' || calories === '') {
            return;
        }

        message = { food, time, calories };
        
        await fetch(BASE_URL + _id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message)
        });
    
        inputForm.reset();
        loadRecords();
        addMealBtn.disabled = false;
        editMealBtn.disabled = true;
    }

    async function deleteRecord(e) {
        currentRecord = e.currentTarget.parentElement.parentElement;
        _id = currentRecord.querySelector('div > button').id;

        await fetch(BASE_URL + _id, { method: 'DELETE' });
        loadRecords();
    }
}

solve();