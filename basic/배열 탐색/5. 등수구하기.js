function solution(arr) {
  let sorted = arr.slice().sort((a, b) => b - a); // sort는 mutate하므로 slice로 복사해준 후 sort 해줌
  let ranks = arr.map((el) => sorted.indexOf(el) + 1);
  return ranks;
}
