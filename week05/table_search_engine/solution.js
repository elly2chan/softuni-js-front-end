function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchText = document.getElementById("searchField");
      let rows = document.querySelectorAll("tbody tr");
      
      for (let row of rows) {
         row.className = "";
      }

      for (let row of rows) {
         if(row.innerHTML.includes(searchText.value) && searchText.value != ""){
            row.className = "select";
         }
      }
      document.getElementById("searchField").value = '';
   }
}