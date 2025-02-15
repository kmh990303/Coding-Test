// 문제 설명
// 고속도로를 이동하는 모든 차량이 고속도로를 이용하면서 단속용 카메라를 한 번은 만나도록 카메라를 설치하려고 합니다.

// 고속도로를 이동하는 차량의 경로 routes가 매개변수로 주어질 때, 모든 차량이 한 번은 단속용 카메라를 만나도록 하려면 최소 몇 대의 카메라를 설치해야 하는지를 return 하도록 solution 함수를 완성하세요.

// 제한사항

// 차량의 대수는 1대 이상 10,000대 이하입니다.
// routes에는 차량의 이동 경로가 포함되어 있으며 routes[i][0]에는 i번째 차량이 고속도로에 진입한 지점, routes[i][1]에는 i번째 차량이 고속도로에서 나간 지점이 적혀 있습니다.
// 차량의 진입/진출 지점에 카메라가 설치되어 있어도 카메라를 만난것으로 간주합니다.
// 차량의 진입 지점, 진출 지점은 -30,000 이상 30,000 이하입니다.

function solution(routes) {
    let answer = 0;
    let camera = -30001;

    routes.sort((a, b) => a[1] - b[1]);
    console.log(routes);

    for (let i = 0; i < routes.length; i++) { //카메라가 기준 값
        if (camera < routes[i][0]) {
            camera = routes[i][1];
            answer++;
        }
    }

    return answer;
}

// 복습 => 진출시점으로 오름차순 정렬 => 카메라시점보다 진입시점이 더 크면 카메라를 진출시점으로 갱신 후 카메라 수 증가시킴
function solution(routes) {
    let answer = 0;
    let camera = -30001;

    routes.sort((a, b) => a[1] - b[1]);

    for (let i = 0; i < routes.length; i++) {
        if (camera < routes[i][0]) {
            camera = routes[i][1];
            answer++;
        }
    }

    return answer;
}