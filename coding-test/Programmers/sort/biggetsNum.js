function solution(numbers) {
    numbers = numbers.map((val) => String(val));
    numbers.sort((a, b) => Number(b + a) - Number(a + b));

    if (numbers[0] === '0') return '0';

    return numbers.join('');
} // b가 a 보다 앞에 왔을 때, 더 크면 내림차순 정렬 / a가 b보다 앞에 왔을 때, 더 크면 오름차순 정렬
// 가장 큰 수가 0이면 그냥 문자열로 0 출력