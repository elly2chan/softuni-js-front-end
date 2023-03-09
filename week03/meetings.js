function meetingsSchedule(data) {
    let meetings = {};
    for (let meeting of data) {
        let weekday = meeting.split(' ')[0];
        let name = meeting.split(' ')[1];

        if (Object.keys(meetings).includes(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`)
        }
    }

    for (const [key, value] of Object.entries(meetings)) {
        console.log(`${key} -> ${value}`);
    }
}

meetingsSchedule(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);

meetingsSchedule(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);