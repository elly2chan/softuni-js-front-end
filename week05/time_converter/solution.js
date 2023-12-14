function attachEventsListeners() {
    buttons = document.querySelectorAll('[type="button"]');
    
    for (btn of buttons) {
        btn.addEventListener('click', convert);
    }

    function convert(e) {
        currentBtn = e.currentTarget.id;
        if (currentBtn === 'daysBtn') {
            days = Number(document.getElementById('days').value);
            document.getElementById('hours').value = 24 * days;
            document.getElementById('minutes').value = (24 * days) * 60;
            document.getElementById('seconds').value = (24 * days) * 3600;
        } else if (currentBtn === 'hoursBtn') {
            hours = Number(document.getElementById('hours').value);
            document.getElementById('days').value = hours / 24;
            document.getElementById('minutes').value = hours * 60 ;
            document.getElementById('seconds').value = hours * 3600;
        } else if (currentBtn === 'minutesBtn') {
            minutes = Number(document.getElementById('minutes').value);
            document.getElementById('days').value = minutes / 1440;
            document.getElementById('hours').value = minutes / 60;
            document.getElementById('seconds').value = minutes * 60;
        } else if (currentBtn === 'secondsBtn') {
            seconds = Number(document.getElementById('seconds').value);
            document.getElementById('days').value = seconds / 86400;
            document.getElementById('hours').value = seconds / 3600;
            document.getElementById('minutes').value = seconds / 60;
        }
        console.log(e.currentTarget.parentElement);
    }
}