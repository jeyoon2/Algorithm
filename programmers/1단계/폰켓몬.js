function solution(nums) {
  let ponketmons = {};
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!Object.keys(ponketmons).includes(String(nums[i]))) {
      ponketmons[String(nums[i])] = 1;
    } else {
      ponketmons[String(nums[i])] = ponketmons[String(nums[i])] + 1;
    }
  }

  if (Object.keys(ponketmons).length >= (nums.length / 2)) {
    answer = nums.length / 2;
  } else {
    answer = Object.keys(ponketmons).length;
  }

  return answer;
}
