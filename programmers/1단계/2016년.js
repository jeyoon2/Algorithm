function solution(a, b) {
  let arr = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let week = ["THU", "FRI", "SAT","SUN", "MON", "TUE", "WED"];

  // 1월 1일부터 a월 b일까지 며칠 차이인지 저장할 변수
  let passedDays = 0;

  // a달 전까지의 모든 달에 대해 각 달의 날짜 수 더해줌
  for (let i = 1; i < a; i++) passedDays += arr[i];

  // b일 더해줌
  passedDays += b;
  return week[(passedDays) % 7];
}
