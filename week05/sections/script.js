function create(words) {
   content = document.getElementById('content');

   for (let word of words) {
       div = document.createElement('div');
       p = document.createElement('p');
       p.textContent = word;
       p.style.display = 'none';
       div.appendChild(p);
       content.appendChild(div);
       div.addEventListener('click', onClick);
   }

   function onClick(e) {
      p = e.target.children[0];
      p.style.display = '';
   }

}