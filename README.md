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

### 9/3

- 배열을 확장하기보다 나머지 연산자를 활용하여 비교하는 것을 택할 것
- Math.max() 의 요소로 여러 인자 넣을 수 있음
- 하노이탑의 경우 원판의 이동에 초점을 둘 것 (시작점, 목적지, 경유지)
<hr>

### 9/5

- 클래스를 통해 인스턴스화 가능한 객체 생성 가능 // constructor 펑션이 가장 많이 실행되고, 내부에 함수 설정 가능 // static으로 선언하면 인스턴스화한 객체에서 접근하는 것이 아닌 기본 클래스명으로 함수에 접근 가능
- 배열.map 메서드로 value, index를 담은 객체 배열 생성 테크닉 활용 가능
- 베열.some 메서드로 모든 요소에 대하여 특정 조건에 만족하는지 true, false 확인 가능
- Math.max(...배열) 은 배열 내부의 최대 값 구하기 가능
- 큐는 선입선출의 개념을 이용하여 shift로 빼낸다면 다시 맨 뒤에 push 하는 구조
<hr>

### 9/6

- 피보나치 수열을 비재귀 방식으로 풀이 (메모이제이션 기법 활용)
<hr>

### 9/7

<단일연결리스트 구현>

- 다수의 노드로 연결됨
- 노드는 next포인터와 value값을 가짐
- 리스트는 head, tail 포인터와 length 속성을 가짐
- 인덱스 개념이 없어 첫 노드부터 탐색해야 함
- 마지막 노드는 연결된 노드 없어서 null로 처리됨
- 요소의 연결 관계 수정 및 포인터 이동에 대한 코드가 작성되어야 함
- 새로운 노드가 중간에 삽입되면 앞 뒤로 노드들을 다시 연결해야 함
- 삽입, 제거가 많이 일어나는 경우 배열보다 연결리스트가 효율적일 수 있음

<반복문 시간복잡도 줄이기>

- 하나 하나 비교하는 반복문보다 스택을 활용하여 비교하면 시간복잡도를 줄일 수 있음
<hr>

### 9/8

<양방향 연결리스트 구현>

- 단방향과는 다르게 노드마다 next, prev 포인터를 가짐
<hr>

### 9/9

<스택>

- LIFO 구조
- 배열 혹은 연결리스트로 구현 가능
- 배열 구현 -> 일반적인 push, pop 메서드 이용
- 연결리스트 구현 -> first, last, size 속성 설정 // 배열의 순회로 인해 시간복잡도가 증가하는 것에 대비해 리스트 맨 앞 요소에서 노드 추가와 삭제가 일어나도록 하여 상수 시간 복잡도가 나오도록 구현

<큐>

- FIFO 구조
- 배열 혹은 연결리스트로 구현 가능
- 배열 구현 -> 일반적인 shift, unshift 메서드 이용
- 연결리스트 구현 -> 리스트의 마지막에서 삽입이 일어나고, 맨 앞 부분에서 삭제가 일어나도록 enqueue, dequeue를 구현
<hr>

### 9/10

<트리>

- 비선형 구조
- 루트: 최상단 노드 // 리프: 자식이 없는 노드 // 엣지: 간선
- ex. HTML DOM

<이진 탐색 트리>

- 각 노드의 자식은 최대 2개인 트리
- 부모보다 작으면 왼쪽, 크면 오른쪽에 배치
- 탐색, 삽입 모두 최악의 경우가 아니면 O(logn);
<hr>

### 9/11

## <트리 순회>

### BFS

- 너비 우선 순회 (Breadth First Search)
- 큐를 이용 (뒤에 push하고, 앞에서 shift 하는 구조)
- 루트 노드부터 시작해서 큐에 삽입한 후 큐에 요소가 하나라도 있으면 해당 요소를 빼내어 결과 배열에 push 하고, 왼쪽 혹은 오른쪽 자식이 있다면 큐에 삽입하는 것을 반복하는 구조
- 같은 층의 노드를 모두 순회하며 아래로 내려감

### DFS

- 깊이 우선 순회 (Depth First Search)
- 재귀 함수를 사용
- 전위 순회, 중위순회, 후위순회는 중간 노드를 언제 방문하느냐를 기준으로 함 (로직은 비슷하며, 중간 노드를 결과 배열에 언제 push하느냐에 관하여 서로 순서가 다름)
  (PreOrder, InOrder, PostOrder)

## <힙>

- 트리의 일종
- 형제 관계의 노드 간에 위치는 상관 없음
- 힙을 이용해 우선순위 큐 구현 가능
- 클래스 정의 시 values 라는 배열만 생성

### 최대 이진 힙과 최소 이진 힙

- 최대 이진 힙: 가장 큰 값이 루트 노드에 위치하고, 부모노드가 자식노드보다 항상 값이 큼.
- 최소 이진 힙: 가장 작은 값이 루트 노드에 위치하고, 부모노드가 자식노드보다 항상 값이 작음.
- (부모 인덱스 구하기) : (자식 인덱스 - 1) / 2 한 후 Math.floor로 내림
- (자식 인덱스 구하기) : 부모인덱스 _ 2 + 1 , 부모인덱스 _ 2 + 2 하면 각각 왼쪽 자식, 오른쪽 자식의 인덱스

### 최대 이진 힙 메서드

- insert : 힙 마지막 자리에 넣고, 부모와 대소관계를 비교해 자식이 더 크면 부모와 스왑하는 과정을 올라가며 반복 진행
- extractMax: 루트 노드 값을 제거하고, 힙 마지막 자리에 있는 노드를 루트 노드에 설정, 이후 왼쪽 자식과 오른쪽 자식 중 더 큰 값과 스왑하며, 반복 진행

<hr>

### 9/12

## 해시테이블

- 키-값 쌍을 저장
- 인덱스처럼 순서를 가지지 않음
- 보안, 암호 기술에 많이 사용됨
- 입력값을 받아들여 숫자로 변환해 해당 버킷에 데이터 저장
- 해시함수는 단방향 함수 // 빨라야 하며, 상수 값의 시간이 소요되도록 함.

## 충돌 해결

- 개별 체이닝: 이중데이터 구조로 여러 개의 키-값 쌍을 한 자리에 둘 수 있음
- 선형 탐사: 각 위치에 하나의 데이터만 저장, 충돌 시 다음 빈 칸을 찾음

## 시간복잡도

- 삽입, 삭제, 접근 모두 평균적으로 O(1) 소요
- 해시 함수의 성능이 안 좋으면 리스트와 비슷한 구조로 바뀌어 탐색에 O(n) 이 걸릴 수 있음
<hr>

### 9/14

## 그래프

- 여러 개의 노드와 그 사이의 연결 관계
- 정점: 동그라미 노드
- 간선: 노드 간의 연결하는 선 (가중치 여부, 방향 여부 포함)
- 인접행렬 : 두 개의 노드끼리 연결되면 1, 연결 안 되어있으면 0으로 표시하는 행렬
- 인접리스트: 각 노드 별로 연결된 번호를 리스트에 넣어 중첩 리스트를 형성

## 그래프 순회

- 시작점을 정하는 것이 중요
- ex. 친구의 친구를 찾는 SNS 알고리즘

## DFS

- 재귀 ver. : helper 함수를 사용해 구현 // 방문한 정점의 결과를 객체에 저장
- 반복 ver. : stack을 사용하여 구현

## BFS

- DFS 반복 ver 과 유사한 논리를 사용하되 큐를 사용하여 shift하는 방법 사용
<hr>

### 9/15

## 다익스트라 알고리즘

- 최단 경로 알고리즘
- 가중치 그래프, 우선순위 큐 이용
- 시작점, 끝점을 인자로 부여
- 노드와 가중치 정보가 담긴 리스트들을 중첩시킨 객체 필요
- visited 배열 : 방문한 정점 저장
- distance 객체: 정점마다 시작점까지의 가장 짧은 거리 저장
- previous 객체: 특정 점에 도달하는데 최단 거리에서 해당 점을 거치기 바로 직전의 정점을 저장
- 거리가 가장 짧은 것을 골라내기 위해 우선순위 큐 사용

## 동적 프로그래밍

- 최적 부분 구조 존재 여부와 반복되는 하위 문제의 존재 여부가 중요
- 하위 문제들을 가지고, 상위 문제를 해결하는 방식
- 메모이제이션: 하향식 접근 방식 // 계산한 값을 기억시켜 재사용함으로써 시간 복잡도 감소시킴
- 타뷸레이션: 상향식 접근 방식 // 맨 밑의 바닥에서부터 시작하는 구조
<hr>

### 9/18 ~ 9/19

## 해쉬 문제 풀이

- 특정 객체를 만들고, 해당 키에 값을 대응시킴
- Set 객체를 이용해 중복 값을 제거시킬 수 있음
- Map 객체를 이용하여 해시맵 구현 가능
- has / set 메서드 사용
- Object.keys(객체명) 으로 객체의 키 값을 모은 배열을 얻을 수 있음
<hr>

### 9/20 ~ 9/23

## 그리디 문제 풀이

- 중복 처리 혹은 정렬 여부를 먼저 결정할 것 => 순서가 정렬되어 데이터가 주어진다는 명시가 없으면 반드시 정렬을 수행할 것
- filter는 새로운 배열을 반환하므로 새로우 변수에 할당시키기 + return false 면 새로운 배열의 요소로 포함하지 않고, return true 일 때만 새로운 배열의 요소로 포함시킴
- Math.abs(변수) 로 절댓값 구하기 가능
- findIndex 로 특정 조건에 맞는 요소의 인덱스를 반환 , 없으면 -1 반환
- find로 특정 조건에 맞는 첫 번째 요소를 반환
- includes 메서드로 특정 요소의 포함 여부를 확인 가능
- slice는 start 부터 end - 1 까지 잘라서 새로운 배열을 만듦
- splice는 특정 인덱스 요소에 대하여 삭제할 요소의 개수를 정하고, 삽입도 가능
- 조이스틱 문제: A 혹은 Z 기준 짧은 거리 계산하는 함수 + A 가 연속되는 부분 고려
- 구명보트 문제: 무게 순으로 정렬하여 가장 무거운 사람의 경우 가벼운 사람과 함께 보트를 태울 수 있어야 보트 개수를 줄일 수 있음
- 섬 연결하기 문제: 다익스트라는 최단 경로 (경로의 비용을 최소화) 알고리즘
  => 섬들을 연결하는 모든 다리의 총 비용 최소화가 목적일 땐, MST (최소 비용 신장 트리) 사용 => 크루스칼 또는 프림 알고리즘 사용

* 크루스칼 알고리즘

- 간선을 오름차순으로 정렬한 후, 사이클이 생기지 않도록 가장 작은 간선부터 연결해 나가는 방식 // union-find 자료 구조를 사용하여 사이클 여부를 판별함

* 프림 알고리즘

- 한 정점에서 시작해, 연결된 정점들롭퉈 가장 적은 비용은 간선을 선택하며 확장하는 방식
- 우선 순위 큐를 활용하여 최소 비용을 선택하는 과정을 최적화

- 교통 카메라 문제: (정렬) // 카메라의 위치를 기준 삼아 최대, 최소 구하는 것처럼 작성 // 각 요소의 앞보다 작으면 해당 요소의 뒷 값으로 초기화 후 변수 카운팅

<hr>

### 9/24

## 완전 탐색 문제 풀이

- Set 객체를 통해 중복을 없앨 수 있음 (add 메서드 활용)
- 스프레드 연산자를 활용한 배열 구현
- 재귀의 종료 조건으로 if 문 활용
- 소수 판별 시 2부터 해당 수의 제곱근까지 하나라도 나눠 떨어지면 소수가 아닌 걸로 판별
- 집합 객체도 forEach 활용 가능
- Number 혹은 parseInt 로 형변환

<hr>

### 9/25 ~ 9/30

## DFS 문제 풀이

- sum 과 index를 전역 변수로 설정하여 이용하면 재귀 수행 시 복잡하게 값이 엉키기 때문에, 인자로 sum과 index의 변형 값을 주는 것이 현명
- dfs, bfs 구현 시 visited 배열 이용
- concat으로 여러 요소가 있는 배열에 단일 요소만 인자로 하여 합칠 수 있음

## 최단거리 찾기

- 간선의 가중치가 모두 동일하면 BFS를 쓰는 것이 효율적임 -> 처음으로 목적지에 도달하면 그것이 최단경로이기 때문
- 간선의 가중치가 다양하면 다익스트라 알고리즘을 쓰는 것이 좋음
- const 는 변수 자체의 재할당을 막는 것이지 객체나 배열 내부의 값을 변경하는 것을 막지 않는다.
- 본래 shift 메서드는 맨 앞에 요소를 빼내고 인덱스를 재조정하는 과정 때문에 O(n) 이 걸림
- Deque 를 이용해 head와 tail로 빼내는 것을 구현하면 O(1) 이 걸림
- 만들어진 경로의 판단을 요구할 때는 DFS를 활용하는 것이 효율적
- 인접리스트(객체) 를 만들어 시작점에 대하여 도착점들을 배열 안에 담아두고, 내림차순으로 미리 정렬시킨 다음, 알파벳 순으로 경로가 진행되도록 pop을 수행해 진행

## 동적 프로그래밍

- 주어진 숫자들을 몇 번 사용했는지에 따라 만들 수 있는 숫자들을 관리하면서 목표 숫자 number를 만들기 위한 방식 활용
- dp 테이블 활용 (앞 인덱스 요소로 뒷 인덱스 요소를 만드는 방향으로 생각)
- 매번 사칙 연산을 모두 수행하는 방향으로 진행

### 10/1

## 최소 힙

- 요소 추가 시 버블업 로직 구현 , 요소 삭제 시 싱크 다운 로직 구현 (부모 : n - 1 / 2 내림 , 자식: 2n + 1, 2n + 2);

## DP

- 부분해로 완전해를 찾아나갈 때, 그 과정에서도 최대, 최소를 찾는 것이 더 효율적
<hr>

### 10/2

## 완전탐색

- 카펫 : 테두리의 경우 가로, 세로 두 칸씩 증가한다는 것을 파악하는 것이 중요했음, 총 타일의 개수는 갈색 + 노란색 개수, 적어도 한 개의 타일이 오면 테두리가 붙어 최소 높이를 3으로 잡아야 함

## 그래프

- BFS는 재귀보다 큐를 사용하는 것이 효율적임
<hr>

### 10/3

## DP

- 모든 최단 경로를 탐색해야 하는 경우 DP를 사용하는 것이 효율적
- 마지막에 특정 수로 나눠야 한다면, 미리 미리 수가 커지기 전에 미리 나누는 분배법칙을 활용하여 오버플로우를 막을 수 있음
- 왼쪽에서 오는 경로, 위쪽에서 오는 경로의 수를 특정 구역에 모두 더하도록 작성
<hr>

### 10/4

## 완전 탐색

- 사전 순의 경우 매 자릿수마다 올 수 있는 경우의 수에 대하여 제곱꼴을 이용하되 순번 계산을 위해 + 1 시켜줘야 함
<hr>

### 10/5

## 힙

- 우선적으로 요청시간에 대한 정렬을 수행하고, 작업을 모두 마무리 혹은 힙이 비어있지 않을 때까지 힙에서 꺼내어 현재시간과 총 대기 시간을 갱신함
<hr>

### 10/6 ~ 10/8

## 완전 탐색

- 카드지갑 : 가로를 기준으로 길고, 세로를 기준으로 짧되, 모든 카드를 수납할 수 있으려면 가로 기준 가장 크고, 세로 기준으로도 가장 길이가 길어야 함
- 모든 가능한 경로 중 최대로 방문하는 것을 찾기 위해 모든 가능 경로를 찾아봐야 하므로 DFS 사용
- BFS를 사용하여 노드 수 계산하는 것이 효율적이라고 판단 // DFS는 노드가 많아지면 계층이 깊어져 복잡해질 수 있기 때문
<hr>

### 10/9

## 스택

- 트럭 : 현재 다리를 건너는 트럭 이외에 대기하는 트럭의 경우 큐에 0값으로 삽입해 큐의 길이를 조건식으로 이용
