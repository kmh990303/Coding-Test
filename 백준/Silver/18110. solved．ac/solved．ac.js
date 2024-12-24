const input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(Number);
const N = input.shift();
if (N == 0) {
	console.log(0);
	process.exit();
}
const limit = Math.round(N * 0.15);
console.log(
	Math.round(
		input
			.sort((a, b) => a - b)
			.slice(limit, N - limit)
			.reduce((r, v) => r + v, 0) /
			(N - 2 * limit)
	)
);