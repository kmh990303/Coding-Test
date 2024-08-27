function productOfArray(arr) {
    if (arr.length === 0) {
        return 1
    }
    let k = arr.splice(0, 1);
    return k * productOfArray(arr);
}


//slice는 반환 값으로 새로운 배열 반환
//splice는 잘라낸 특정 요소 값 (잘라낼 요소의 인덱스 , 0 혹은 1로 추가, 삭제 결정)