// 로프 개수와 각 로프의 최대 중량 입력
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  // 첫 번째 입력은 로프의 개수
  const n = parseInt(input[0]);

  // 나머지 입력은 각 로프의 최대 중량
  const ropes = input.slice(1).map(Number);

  // 내림차순 정렬
  ropes.sort((a, b) => b - a);

  // 들어올릴 수 있는 최대 중량 계산
  let maxWeight = 0;

  for (let i = 0; i < n; i++) {
    maxWeight = Math.max(maxWeight, ropes[i] * (i + 1));
  }

  // 결과 출력
  console.log(maxWeight);
});
