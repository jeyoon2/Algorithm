function solution(answers) {
  // 1번: 1, 2, 3, 4, 5
  // 2번: 2, 1, 2, 3, 2, 4, 2, 5
  // 3번: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5
  let one = "12345"
      .repeat(2000)
      .split("")
      .map((el) => Number(el)),
    score1 = 0;
  let two = "21232425"
      .repeat(1250)
      .split("")
      .map((el) => Number(el)),
    score2 = 0;
  let three = "3311224455"
      .repeat(1000)
      .split("")
      .map((el) => Number(el)),
    score3 = 0;
  // answers를 반복문으로 돌면서 각 엘리먼트가 1,2,3번 수포자들의 엘리먼트와 일치하는지 확인한다.
  // 일치하면 score++
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === one[i]) {
      score1++;
    }
    if (answers[i] === two[i]) {
      score2++;
    }
    if (answers[i] === three[i]) {
      score3++;
    }
  }
  let maxScore = Math.max(score1, score2, score3);
  console.log(maxScore);
  let winner = [];
  if (maxScore === score1) {
    winner.push(1);
  }
  if (maxScore === score2) {
    winner.push(2);
  }
  if (maxScore === score3) {
    winner.push(3);
  }
  return winner;
}

console.log(solution([1, 3, 2, 4, 2]));
