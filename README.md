# 코딩테스트 문제풀이

### 8/16 
배열의 일치, 불일치 판단 // indexOf, splice 활용
<hr>
  
### 8/25 
- 문자열의 요소 별 개수 일치, 불일치 판단 // for ... in을 활용하여 객체의 빈도수 비교 수행 // for ... of를 활용해 배열, 문자열의 요소 순회
- 숫자 정렬 시 sort 메서드에서 sort((a , b) => a - b)로 작성
- 배열에서 숫자의 최대, 최소는 Math.min(...arr) , Math.max(...arr) 로 사용 가능
<hr>
  
### 8/26 
- includes 메서드를 통해 배열의 특정 요소가 존재하는지 여부 파악 가능 // Math.max(n1, n2) 로 최대값 구하기 가능 // 반복문의 증감식 혹은 초기값을 특별하게 설정하여 시간복잡도 줄이기 가능
- reduce 메서드를 통해 순회하며, prev, now, Idx 값을 통해 연속적인 연산 가능 // slice(a , b) 하면 a부터 b-1 까지 잘라냄 // Math.floor는 내림, Math.round는 반올림 // 단어.slice(-1) 하면 마지막 글자 추출 // indexOf 메서드로 요소의 인덱스 추출
<hr>

### 8/27 
- 재귀에선 종료 조건이 중요!!! // slice와 splice의 차이 ->> 잘라낸 새로운 배열 반환하느냐 혹은 잘라낸 특정 요소를 반환하냐
- 변수 앞에 +를 붙이면 정수형 변환됨 // reduce에서 초기값 설정 안 하면 자동으로 초기값은 배열의 첫 번째 인덱스 요소값으로 설정됨 // forEach로 배열의 각 요소로 순회 가능
<hr>

### 8/28
- pop 메서드 자체는 마지막 요소만 빼낼 뿐, 특정 인덱스의 요소를 빼내는 용도가 아님 // new Set() , has, add 등 집합 관련 메서드 // 반복문 돌릴 때, 시작 인덱스와 마지막 인덱스만 잘 설정해도 코드 간소화 가능
- 배열1.concat(배열2)로 배열 두 개 합치기 가능 // unshift, shift는 배열 맨 앞에 요소를 추가, 삭제함 // 문자열요소.repeat(n) 하면 특정 문자열 요소를 n번 반복해 새로운 문자열을 생성시킴 // 배열.reverse()를 하면 배열 요소를 거꾸로 뒤집음 // 문자열을 스프레드연산자 '...'으로 펼치면 문자열의 각 인덱스 요소를 활용가능 // Math.floor(n1 / n2) 을 통해 나눗셈의 몫을 구할 수 있음
<hr>

### 8/29
- 이진탐색 학습 -> 정렬된 배열이 있을 때, left right 포인터를 두고 중간점을 구해 해당 요소의 값보다 인자 값이 큰지 작은지 판단하며 중간점을 옮겨 원하는 요소를 탐색함 -> 최선의 경우 O(1) , 평균, 최악의 경우 O(logn)
- 최솟값 구할 때, 초기값은 Infinity 설정 가능 // 변수 선언시 값 따로 다 초기화할 것!
<hr>

### 8/30
- sort((a, b) => a - b) 형태 정렬 // const [변수1, 변수2] = 배열 변수 형태처럼 구조 분해 할당 가능 // 중첩 배열은 인덱스 배열마다 초기화해서 각 인덱스의 요소 값 변경 가능
- 버블 정렬: 매 반복마다 앞 뒤로 숫자 크기를 비교해 큰 숫자가 뒤로 가게 하여 매 반복마다 정해진 구간의 마지막 인덱스에 큰 값을 넣게끔 한다.
- 선택 정렬: 매 반복마다 최솟값을 정해진 구간의 맨 앞에 위치시킴
- 삽입 정렬: 한 번에 하나의 항목을 올바른 위치에 삽입해서 배열의 정렬된 부분을 점진적으로 구축
<hr>

### 8/31
- 병합정렬 -> 버블정렬, 선택정렬, 삽입정렬에 비해 큰 규모의 배열의 정렬에서 보다 효율적임 // 배열의 길이가 1보다 작거나 같도록 절반씩 배열을 분할하고, 분할 작업이 끝나면 left, right 배열을 합치면서 정렬을 수행 // 시간복잡도의 경우 분할하는 과정에서 logn, 비교하며 정렬하는 합병 과정에서 n 이 소요되어 결과적으로 O(nlogn)이 소요된다.
<hr>

### 9/1
- 퀵정렬 -> 분할하는데 logn, 비교하는데 n이 소요되어 최고의 경우 O(nlogn) 소요 // 정렬이 모두 되어있는 최악의 경우 O(n^2) 소요 
-> 첫 요소를 피벗으로 선정해 해당 값보다 작은 값들을 첫 요소 옆에 배치하기 위해 swapIdx와 i 인덱스의 요소를 바꿈 -> 피벗 인덱스를 구해 좌우로 분할하여 똑같이 수행
<hr>

### 9/2
- 반복문으로 push하는 로직을 쓴다면 마지막 iteration 때 수행할 로직을 따로 밖에 써줘야 함
- Math.ceil 올림 / Math.floor 내림 / Math.sqrt 제곱근
<hr>
