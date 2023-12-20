window.addEventListener("load", solve);

function solve() {
    let form = document.getElementsByTagName('form')[0];
    let scores = document.getElementById('sure-list');
    let scoreboard = document.getElementById('scoreboard-list');
    
    let player = document.getElementById('player');
    let score = document.getElementById('score');
    let round = document.getElementById('round');

    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener("click", addRecord);
    let clearBtn = document.getElementsByClassName('btn clear')[0];
    clearBtn.addEventListener("click", () => location.reload());

    function addRecord() {
      if (player.value === '' || score.value === '' || round.value === '') {
        return;
      }

      let li = document.createElement('li');
      let article = document.createElement('article');
      let nameP = document.createElement('p');
      let scoreP = document.createElement('p');
      let roundP = document.createElement('p');
      let editBtn = document.createElement('button');
      let okBtn = document.createElement('button');
      
      li.className = 'dart-item';
      nameP.textContent = player.value;
      scoreP.textContent = `Score: ${score.value}`;
      scoreP.value = score.value;
      roundP.textContent = `Round: ${round.value}`;
      roundP.value = round.value;
      editBtn.className = 'btn edit';
      editBtn.textContent = 'EDIT'
      editBtn.addEventListener('click', editRecord);
      okBtn.className = 'btn ok';
      okBtn.textContent = 'OK'
      okBtn.addEventListener('click', moveRecord);

      article.appendChild(nameP);
      article.appendChild(scoreP);
      article.appendChild(roundP);
      li.appendChild(article);
      li.appendChild(editBtn);
      li.appendChild(okBtn);

      addBtn.disabled = true;
      scores.appendChild(li);
      form.reset();
    }

    function editRecord(e) {
      let record = e.currentTarget.parentElement;
      [currentPlayer, currentScore, currentRound] = record.querySelectorAll('article > p');
      record.remove();
      player.value = currentPlayer.textContent;
      score.value = currentScore.value;
      round.value = currentRound.value;
      addBtn.disabled = false;
    }

    function moveRecord(e) {
      let record = e.currentTarget.parentElement;
      buttons = record.querySelectorAll('button');
      buttons[0].remove();
      buttons[1].remove();
      record.remove();
      scoreboard.appendChild(record);
      addBtn.disabled = false;
    }
}