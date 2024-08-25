// 인자로 들어온 두 배열에 대하여 arr1의 요소를 제곱한 값이 arr2에 존재하는 일대일관계일 때, true 반환하는 문제
function same(arr1 = [], arr2 = []) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        let findIndex = arr2.indexOf(arr1[i] ** 2);
        if (findIndex === -1) {
            return false
        };
        arr2.splice(findIndex, 1)
    }
    return true;
}

console.log(same([1, 2, 1], [4, 4, 1])) //false
console.log(same([1 ,2 ,1], [4, 1, 1])) //true
