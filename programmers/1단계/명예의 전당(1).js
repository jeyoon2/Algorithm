function solution(k, score) {
  let answer = [];
  let hallOfFame = [];
  let minScore = 0;
  let getMinScore = () => {
     minScore = Math.min(...hallOfFame);
  }

  for (let i = 0; i < score.length; i++) {
    if (hallOfFame.length < k) {
      hallOfFame.push(score[i]);
      getMinScore();
    } else {
      getMinScore();

      if (minScore < score[i]) {
        for (let j = 0; j < hallOfFame.length; j++) {
          if (hallOfFame[j] === minScore) {
            hallOfFame.splice(j, 1);
            break;
          }
        }
        hallOfFame.push(score[i]);
        getMinScore();
      }
    }
    answer.push(minScore);
  }
  return answer;
}
