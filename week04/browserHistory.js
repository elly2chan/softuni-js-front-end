// this solution gives 80%

function browserHistory(obj, actions) {
    for (let action of actions) {
        if (!action.includes('Clear')) {
            obj['Browser Logs'].push(action);
            [action, website] = action.split(' ');
            if (action === 'Close' && obj['Open Tabs'].includes(website)) {
                index = obj['Open Tabs'].indexOf(website);
                obj['Open Tabs'].splice(index, 1);
                obj['Recently Closed'].push(website);
            } else {
                obj['Open Tabs'].push(website);
            }
        } else {
            obj['Open Tabs'] = [];
            obj['Recently Closed'] = [];
            obj['Browser Logs'] = [];
        }
    }
    console.log(obj['Browser Name']);
    console.log(`Open Tabs: ${obj['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${obj['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${obj['Browser Logs'].join(', ')}`);
}

browserHistory(
    {"Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)