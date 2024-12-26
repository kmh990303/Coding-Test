const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const n = Number(input[0]);
    const switchList = input[1].split(' ').map(Number);

    const studentN = Number(input[2]);
    const studentList = [];

    for (let i = 3; i < 3 + studentN; i++) {
        studentList.push(input[i].split(' ').map(Number));
    }

    function manCommand(switchList, num, n) {
        for (let i = 0; i < n; i++) {
            if ((i + 1) % num === 0) {
                if (switchList[i] === 0) {
                    switchList[i] = 1;
                } else {
                    switchList[i] = 0;
                }
            }
        }
    }

    function womanCommand(switchList, num, n) {
        let left = num - 1; // 인덱스 기준
        let right = num + 1;

        if (switchList[num] === 0) {
            switchList[num] = 1;
        } else {
            switchList[num] = 0;
        }

        while (switchList[left] === switchList[right]) {
            if (switchList[left] === 0) {
                switchList[left] = 1;
            } else {
                switchList[left] = 0;
            }

            if (switchList[right] === 0) {
                switchList[right] = 1;
            } else {
                switchList[right] = 0;
            }

            left--;
            right++;
            if (left < 0 || right >= n) break;
        }
    }

    for (let [gender, num] of studentList) {
        if (gender === 1) { // 남자
            manCommand(switchList, num, n);
        } else { // 여자
            womanCommand(switchList, num - 1, n);
        }
    }

    let count = 0;
    let result = [];

    for (let i = 0; i < switchList.length; i++) {
        result.push(switchList[i]);
        count++;

        if (count % 20 === 0) {
            console.log(result.join(' '));
            result = [];
            count = 0;
        }
    }

    if (result.length > 0) {
        console.log(result.join(' '));
    }
})