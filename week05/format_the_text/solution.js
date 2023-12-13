function solve() {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  let sentences = input.split(".")
                      .filter((sentence) => sentence.length > 1)
                      .map(s => s+=".");

                      
  while(sentences.length > 0){                      
    let paragraph = document.createElement("p");
    paragraph.textContent = sentences.splice(0,3).join("");
    output.appendChild(paragraph);
  }
}