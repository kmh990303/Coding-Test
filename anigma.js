function validAnagram(str1, str2) { //두 문자열의 빈도 수를 확인 
    let frequencyStr1 = {}
    let frequencyStr2 = {}

    for (let i = 0; i <str1.length; i++) {
        frequencyStr1[str1[i]] = (frequencyStr1[str1[i]] | 0) + 1
    }

    // console.log(frequencyStr1)

    for (let i = 0; i < str2.length; i++) {
        frequencyStr2[str2[i]] = (frequencyStr2[str2[i]] | 0) + 1
    }

    // console.log(frequencyStr2)

    for (let key in frequencyStr1) {
        if (!(key in frequencyStr2)) {
            return false
        }
        if (frequencyStr1[key] !== frequencyStr2[key]) {
            return false;
        }
    }

    return true;
}

// console.log(validAnagram('aaz', 'zza'))

// for ... in 을 통해 객체의 속성을 iteration에서 활용 가능

// for ... of를 통해 배열, 문자열의 요소 하나 하나를 iteration에서 활용 가능