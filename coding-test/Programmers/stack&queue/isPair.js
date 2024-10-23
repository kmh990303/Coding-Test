function solution(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) {
                return false;
            } else {
                stack.pop();
            }
        }
    }

    return stack.length === 0;
} // 열린 괄호보다 닫힌 괄호가 먼저 나오면 애초에 짝이 안 맞기에 false 반환