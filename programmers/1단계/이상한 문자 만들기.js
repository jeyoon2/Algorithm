function solution(s) {
  // 문자열을 공백을 기준으로 split
  // 배열의 각 요소에 대해, el의 짝수번째 글자는 대문자로, 홀수번째 글자는 소문자로 바꾼다!
  // 마지막에 공백을 두고 join

  let arr = s.split(" ");

  return arr
    .map((el) => {
      let result = "";
      for (let i = 0; i < el.length; i++) {
        if (i % 2 === 0) {
          result += el[i].toUpperCase();
        } else {
          result += el[i].toLowerCase();
        }
      }
      return result;
    })
    .join(" ");
}

console.log(solution("try hello world"));
