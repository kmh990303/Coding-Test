//들어오는 배열의 중복된 것을 제외한 고유 숫자의 개수

function countUniqueValues(arr){
    let uniqueArr = []
    
    for (let i = 0; i < arr.length; i++) {
        if ( uniqueArr.includes(arr[i])) {
            continue;
        }
        uniqueArr.push(arr[i]);
    }
    
    return uniqueArr.length
}