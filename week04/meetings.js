function meetingsManager(data) {
    let scheduledMeetings = {};

    for (row of data) {
        let [day, name] = row.split(' ');

        if (!scheduledMeetings.hasOwnProperty(day)) {
            scheduledMeetings[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for ([key, value] of Object.entries(scheduledMeetings)) {
        console.log(`${key} -> ${value}`);
    }
}

meetingsManager(
    [
      'Monday Peter',
      'Wednesday Bill',
      'Monday Tim',
      'Friday Tim'
    ]
  );