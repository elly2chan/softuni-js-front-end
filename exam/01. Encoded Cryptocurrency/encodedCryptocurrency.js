function solve(data) {
    let encodedMessage = data[0];
    data.shift();

    for (let row of data) {
        if (row === 'Buy') {
            console.log(`The cryptocurrency is: ${encodedMessage}`);
            break;
        }

        if (row === 'TakeEven') {
            let result = '';
            for (let i = 0; i < encodedMessage.length; i++) {
                if (i % 2 === 0) {
                    result += encodedMessage[i];
                }
            }
            encodedMessage = result;
            console.log(encodedMessage);
        } else {
            row = row.split('?');
            let command = row[0];
            row.shift();
            
            if (command === 'ChangeAll') {
                let [substring, replacement] = row;
                encodedMessage = encodedMessage.split(substring).join(replacement);
                console.log(encodedMessage);
            } else if (command === 'Reverse') {
                let substring = row[0];
                let reversedSubstring = substring.split('').reverse().join('');

                if (encodedMessage.includes(substring)) {
                    encodedMessage = encodedMessage.replace(substring, '');
                    encodedMessage += reversedSubstring;
                    console.log(encodedMessage);
                } else {
                    console.log('error');
                }
            }
        }
    }
}

solve(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?m?g",
"Reverse?adshk",
"ChangeAll?z?i",
"Buy"])