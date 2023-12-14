function solve() {
  textAreas = document.getElementsByTagName('textarea');
  buttons = document.getElementsByTagName('button');
  buttons[0].addEventListener('click', generate);
  buttons[1].addEventListener('click', buy);

  function generate() {
    input = JSON.parse(textAreas[0].value);
    tbody = document.getElementsByTagName('tbody')[0];
    for (obj of input) {
      tr = document.createElement('tr');
      td1 = document.createElement('td');
      td2 = document.createElement('td');
      td3 = document.createElement('td');
      td4 = document.createElement('td');
      td5 = document.createElement('td');

      img = document.createElement('img');
      img.src = obj.img;
      td1.appendChild(img);
      td2.textContent = obj.name;
      td3.textContent = obj.price;
      td4.textContent = obj.decFactor;
      checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      td5.appendChild(checkbox);

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tbody.appendChild(tr);
    }
  }

  furnitureBought = [];
  totalPrice = 0;
  avgDecFactor = [];
  result = '';

  function buy() {
    products = Array.from(document.querySelectorAll('tbody tr'));
    for (product of products) {
      checkbox = product.children[4].children[0];
      if (checkbox.checked) {
        furnitureBought.push(product.children[1].textContent);
        totalPrice += Number(product.children[2].textContent);
        avgDecFactor.push(Number(product.children[3].textContent));
      }
    }
    if (totalPrice > 0) {
      result += `Bought furniture: ${furnitureBought.join(', ')}\n`
      result += `Total price: ${totalPrice.toFixed(2)}\n`;
      result += `Average decoration factor: ${avgDecFactor.reduce((a, b) => a + b, 0) / avgDecFactor.length}`;
      textAreas[1].value = result;
    }
  }
}