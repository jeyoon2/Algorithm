function solution(name, yearning, photo) {
  let answer = [];
  let missingScore = {};
  
  for (let i = 0; i < name.length; i++) {
    missingScore[name[i]] = yearning[i];
  }

  answer = photo.map(el => {
    let score = 0;
    for (let i = 0; i < el.length; i++) {
      if (Object.keys(missingScore).includes(el[i])) {
        score += missingScore[el[i]];
      }
    }
    return score;
  })
  
  return answer;
}
