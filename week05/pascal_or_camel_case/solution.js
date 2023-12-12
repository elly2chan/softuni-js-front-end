function solve() {
  input = (document.getElementById('text').value).toLowerCase();
  currentCase = document.getElementById('naming-convention').value;
  result = '';

  if (currentCase === 'Camel Case') {
    result = input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
    console.log(result);
  } else if (currentCase === 'Pascal Case') {
    toPascalCase = str => str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    .join('');
    result = toPascalCase(input);
  } else {
    result = 'Error!'
  }
  document.getElementById('result').innerHTML = result;
}
