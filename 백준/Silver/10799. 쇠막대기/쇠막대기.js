const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', (line) => {
    const st = line.trim();
    const stack = [];
    let pieces = 0;

    for (let i = 0; i < st.length; i++) {
        if (st[i] === '(') {
            stack.push('(');
        } else {
            stack.pop();
            if (st[i - 1] === '(') {
                pieces += stack.length;
            } else {
                pieces += 1;
            }
        }
    }
    console.log(pieces);
    rl.close();
})