function solution(arr) {
  let sorted = arr.slice().sort((a, b) => b - a); // sort는 mutate하므로 slice로 복사해준 후 sort 해줌
  let ranks = arr.map((el) => sorted.indexOf(el) + 1);
  return ranks;
}

// 다른 풀이
function solution5(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1); // [1,1,1,1,1]
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}
