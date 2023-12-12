function sumTable() {
    products = Array.from(document.querySelectorAll("td:nth-child(2):not(#sum)"));
    
    result = products.reduce((acc, curr) => {
        acc += Number(curr.textContent);
        return acc;
    }, 0);
    document.querySelector("#sum").textContent = result;
}