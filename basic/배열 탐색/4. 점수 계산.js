function solution(arr) {
  let result = 0, cnt = 0;
  // 누적되는 값의 지표인 cnt를 설정해줌
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      cnt = 0; 
    } else {
      cnt++; 
      result += cnt;
    }
  } 
  return result;
}
