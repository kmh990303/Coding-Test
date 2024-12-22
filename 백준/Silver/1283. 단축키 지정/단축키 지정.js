const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "입력.txt")
  .toString()
  .trim()
  .split("\n");

function solution(data) {
  data.shift();
  // 단축키를 저장하기 위한 객체
  const dic = {};

  const result = data.map((el) => act(el, dic));
  console.log(result.join("\n"));
}

// 문자열을 순회하며 정답을 반환하는 함수
function act(str, dic) {
  const arr = str.split("");
  // 문자열이 가진 각 단어의 첫 글자를 순회하는 반복문
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i - 1] === " ") {
      const verify_s = verify(arr, arr[i], dic, i);
      if (verify_s) return verify_s;
    }
  }
  
  // 첫 글자에서 단축키를 찾지 못할 경우, 나머지 글자를 순회하는 반복문
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== " ") {
      const verify_s = verify(arr, arr[i], dic, i);
      if (verify_s) return verify_s;
    }
  }
  
  // 단축키를 찾지 못할 경우 문자열을 그대로 반환
  return str;
}

// 특정 문자가 단축키로 지정되어 있는지 확인 후 변환한 문자열을 반환하는 함수
function verify(arr, s, dic, idx) {
  const lower_s = s.toLowerCase();
  if (!dic[lower_s]) {
    dic[lower_s] = true;
    const _s = s;
    arr[idx] = `[${_s}]`;
    return arr.join("");
  }
  return false;
}

solution(input);