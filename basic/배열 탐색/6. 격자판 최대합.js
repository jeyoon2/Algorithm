function solution6(arr) {
  let answer = Number.MIN_SAFE_INTEGER; // 정수 중 가장 작은 수로 초기화
  let n = arr.length;
  let sum1 = (sum2 = 0);

  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0; // 초기화
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j]; // 행의 합
      sum2 += arr[j][i]; // 열의 합
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  return answer;
}

// 다른 풀이
function solution(arr) {
  // 열의 합들 중 최대값
  let garo = arr.map((el) => {
    return el.reduce((a, b) => a + b);
  });
  let garoMax = Math.max(...garo);

  // 행의 합들 중 최대값
  let sero = [0, 0, 0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      sero[i] += Number(arr[i][j]);
    }
  }
  let seroMax = Math.max(...sero);

  // 대각선의 합들 중 최대값
  let diagonal1 = 0,
    diagonal2 = 0;
  for (let i = 0; i < arr.length; i++) {
    diagonal1 += arr[i][i];
    diagonal2 += arr[i][4 - i];
  }
  let diagonalMax = Math.max(diagonal1, diagonal2);

  return Math.max(garoMax, seroMax, diagonalMax);
}
