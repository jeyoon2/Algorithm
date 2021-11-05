function solution(arr){
    // let result = 0;         
    // 가장 큰 키를 구한다(max)
    // 배열을 순회하며, max보다 큰 값이 있으면, 그 값을 max로 설정하고, result++

    let result = 1;
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            result++;
        }
    }
    return result;
}
