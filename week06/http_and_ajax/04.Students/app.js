function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';

  let students = document.getElementsByTagName('tbody')[0];
  let inputs = document.getElementsByTagName('input');

  let fName = inputs[0];
  let lName = inputs[1];
  let facNumber = inputs[2];
  let studentGrade = inputs[3];

  let submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', addRecord);

  async function loadData() {
    try {
      students.innerHTML = '';
      fName.value = '';
      lName.value = '';
      facNumber.value = '';
      studentGrade.value = ''

      response = await fetch(BASE_URL, { method: 'GET' });
      data = await response.json();

      // DOM MANIPULATIONS
      for ([_id, studentInfo] of Object.entries(data)) {
        let tr =  document.createElement('tr');
        let firstTh = document.createElement('th');
        let secondTh = document.createElement('th');
        let thirdTh = document.createElement('th');
        let fourthTh = document.createElement('th');

        grade = Number(studentInfo.grade);
        grade = grade.toFixed(2);

        firstTh.textContent = studentInfo.firstName;
        secondTh.textContent = studentInfo.lastName;
        thirdTh.textContent = studentInfo.facultyNumber;
        fourthTh.textContent = grade;

        tr.appendChild(firstTh);
        tr.appendChild(secondTh);
        tr.appendChild(thirdTh);
        tr.appendChild(fourthTh);
        students.appendChild(tr);
      }
    } 
    catch (error) {
      console.error(error);
    }
  }

  loadData();

  async function addRecord() {
    try {
      let firstName = fName.value;
      let lastName = lName.value;
      let facultyNumber = facNumber.value;
      let grade = studentGrade.value;

      if (firstName != '' && lastName != '' && facultyNumber != '' && grade != '') {
        let message = { firstName, lastName, facultyNumber, grade };

        await fetch(BASE_URL, 
            { method: 'POST', headers: { "Content-type": "application/json" }, body: JSON.stringify(message) })
        loadData();
      }
    } 
    catch (error) {
      console.error(error);
    }
  }
}

attachEvents();