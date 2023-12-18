function getInfo() {
    let stopId = Number(document.getElementById('stopId').value);
    const BASE_URL = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    buses = document.getElementById('buses');

    fetch(BASE_URL, {method: 'GET'})
    .then(response => response.json())
    .then(data => {
        buses.innerHTML = '';
        document.getElementById('stopName').textContent = data.name;
        console.log(data.buses);
        for ([busId, time] of Object.entries(data.buses)) {
            let li = document.createElement('li');
            li.textContent = `Bus ${busId} arrives in ${time} minutes`
            buses.appendChild(li);
        }
    })
    .catch(() => {
        document.getElementById('stopName').textContent = 'Error';
    })
}