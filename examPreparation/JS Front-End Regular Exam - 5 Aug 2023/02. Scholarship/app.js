window.addEventListener("load", solve);

function solve() {
    inputForm = document.querySelector('form');
    studentInput = document.getElementById('student');
    universityInput = document.getElementById('university');
    scoreInput = document.getElementById('score');
    nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener("click", addRecord);

    previewList = document.getElementById('preview-list');
    candidatesList = document.getElementById('candidates-list');

    function addRecord() {
      previewList.innerHTML += 
      `
      <li class="application">
        <article>
          <h4>${studentInput.value}</h4>
          <p>University: ${universityInput.value}</p>
          <p>Score: ${scoreInput.value}</p>
        </article>
        <button class="action-btn edit">edit</button>
        <button class="action-btn apply">apply</button>
      </li>
      `
      inputForm.reset();
      nextBtn.disabled = true;

      buttons = previewList.querySelectorAll('li > button');
      editBtn = buttons[0].addEventListener('click', editRecord);
      applyBtn = buttons[1].addEventListener('click', applyRecord);
    }

    function editRecord(e) {
      currentRecord = e.currentTarget.parentElement;
      currentRecord.remove();
      student = currentRecord.querySelector('article > h4').textContent;
      info = currentRecord.querySelectorAll('article > p');
      university = info[0].textContent.split(': ')[1];
      score = info[1].textContent.split(': ')[1];

      studentInput.value = student;
      universityInput.value = university;
      scoreInput.value = score;

      nextBtn.disabled = false;
    }

    function applyRecord(e) {
      currentRecord = e.currentTarget.parentElement;
      currentRecord.remove();
      editBtn = currentRecord.getElementsByClassName('action-btn edit')[0];
      applyBtn = currentRecord.getElementsByClassName('action-btn apply')[0];
      editBtn.remove();
      applyBtn.remove();

      candidatesList.appendChild(currentRecord);
    }
}
  