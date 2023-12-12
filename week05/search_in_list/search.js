function search() {
   towns = document.querySelectorAll('#towns li');
   searchText = document.getElementById('searchText').value;

   for (town of towns) {
      town.style.textDecoration = "";
      town.style.fontWeight = "";
   }
   
   matches = 0;
   for (town of towns) {
      if (town.innerHTML.includes(searchText)) {
         town.style.textDecoration = "underline";
         town.style.fontWeight = "bold";
         matches++;
      }
   }
   document.getElementById('result').innerHTML = `${matches} matches found`;
}
