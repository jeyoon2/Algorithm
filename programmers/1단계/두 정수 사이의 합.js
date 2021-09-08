function solution(a, b) {
    // 두 정수 중 큰 것과 작은 것을 정한다.
    // min부터 max까지 반복문을 돌린다. 
    let sum = 0, min, max;
    
    if (a < b) {
        min = a;
        max = b;
    } else {
        min = b;
        max = a;
    }
    
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    
    return sum;
}
