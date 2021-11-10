function solution(arr) {
  let count = 0;
  let n = arr.length;
  // 상하좌우 방향으로 이동하기 위한 배열 초기화
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1; // 봉우리인지 확인하는 지표
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k]; // x축 이동좌표
        let ny = j + dy[k]; // y축 이동좌표
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) count++;
    }
  }
  return count;
}
