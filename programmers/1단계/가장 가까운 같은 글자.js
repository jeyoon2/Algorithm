function solution(s) {
  let answer = [-1];

  for (let i = 1; i < s.length; i++) {
    let forwards = s.slice(0, i);

    if (!forwards.includes(s[i])) {
      answer.push(-1);
      continue;
    } else {
      let result = Number.MAX_SAFE_INTEGER;
      for (let j = 0; j < forwards.length; j++) {
        if (s[i] === s[j]) {
          if (result > i - j) {
            result = i - j;
          }
        } else {
          continue;
        }
      }
      answer.push(result);
    }
  }
  return answer;
}
