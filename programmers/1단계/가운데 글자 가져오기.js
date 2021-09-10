function solution(s) {
 // 단어의 길이가 홀수 --> 중간 인덱스 반환
 // 단어의 길이가 짝수 --> 가운데 두 인덱스 반환 
    
    let mid = Math.floor(s.length / 2);
    
    if (s.length % 2 !== 0) {
        return s[mid];
    } else {
        return s.slice(mid - 1, mid + 1);
    }
}
