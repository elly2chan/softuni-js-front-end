function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/'
    let info = document.getElementsByClassName('info')[0];
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    let departId = 'depot';
    let arriveStopName = '';

    function depart() {
        fetch(BASE_URL + departId, {method: 'GET'})
        .then(response => response.json())
        .then(data => {
            info.textContent = `Next stop ${data.name}`;
            departBtn.disabled = true;
            arriveBtn.disabled = false;
            departId = data.next;
            arriveStopName = data.name;
        })
        .catch((err) => {
            info.textContent = 'Error';
        })
    }

    async function arrive() {
        fetch(BASE_URL + 'depot', {method: 'GET'})
        .then(response => response.json())
        .then(data => {
            departBtn.disabled = false;
            arriveBtn.disabled = true;
            info.textContent = `Arriving at ${arriveStopName}`;
        })
    }

    return {
        depart,
        arrive
    };
}

let result = solve();