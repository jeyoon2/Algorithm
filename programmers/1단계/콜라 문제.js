function solution(a, b, n) {
  // 가지고 있는 병들보다 작은 a의 최대 배수만큼의 병을 가져간다. 
  // 얻은 병과 남은 병의 합이 다시 가지고 있는 병이 된다.

  let answer = 0; // 얻은 병의 총 개수
  let bottles = n; // 가지고 있는 병의 개수

  while (a <= bottles) {
    let bottlesToBring = 0; // 가져갈 병
    let freeBottles = 0; // 받은 병
    let restBottles = 0; // 못가져가고 남은 병

    bottlesToBring = Math.floor(bottles / a) * a;
    freeBottles = (bottlesToBring / a) * b;
    answer += freeBottles;
    restBottles = bottles - bottlesToBring;
    bottles = freeBottles + restBottles;
  }

  return answer;
}
