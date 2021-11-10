var decode = function (encoded, first) {
  let result = [];
  result[0] = first;

  for (let i = 0; i < encoded.length; i++) {
    result[i + 1] = result[i] ^ encoded[i];
  }

  return result;
};

// First try: I thaught the XOR operator is only valid between binary numbers.

var decode = function (encoded, first) {
  // 원래배열을 result =[];로 둔다
  // step1. 모두 2진수로 바꾸기
  // encoded된 배열에 first를 push해 이진수 배열로 변환 (map)
  // 자릿수 맞춰주기 => 배열의 요소들 중 가장 긴 길이를 구한다
  // 나머지 요소들의 길이와의 차이만큼 앞에 '0'을 더해준다 (map)
  // 이진수로 변환된 first값을 result[0]에 할당하고, 배열에서 잘라냄
  // result[1] = result[0]과 encoded[0]를 XOR 연산한 값
  // result[2] = result[1] ^ encoded[1]
  // .....
  // result[encoded.length-1] = result[encoded.length - 2] ^ encoded [encoded.length -2]
  // 2진수 배열을 10진수로 변환하여 리턴

  let result = [];
  encoded.push(first); //[1,2,3,1]

  let encoded_bin = encoded.map(function (el) {
    //이진수 문자열로 이루어진 배열로 변환
    let el_bin = el.toString(2);
    return el_bin;
  });

  let maxLength = 0; // 가장 긴 길이 구하기 -> reduce로 하니까 에러. Uncaught TypeError: Cannot read property 'length' of undefined 왜?
  for (let i = 0; i < encoded_bin.length; i++) {
    if (encoded_bin[i].length > maxLength) {
      maxlength = encoded_bin[i].length;
    }
  }

  let encoded_bin_re = encoded_bin.map(function (el) {
    // 자릿수 맞추기 -> 0을 추가해준다
    let diff = maxLength - el.length;
    if (diff < 0) {
      for (let i = 0; i < diff; i++) {
        el = "0" + el;
      }
      return el;
    }
    return el;
  });

  result[0] = Number(encoded_bin_re[encoded_bin_re.length - 1]);
  encoded_bin_re.pop(); // 넣어줬던 first값을 떼어낸다

  for (let i = 0; i < encoded_bin_re.length; i++) {
    result[i + 1] = result[i] ^ Number(encoded_bin_re[i]);
  }

  return result.map(function (el) {
    // 입력된 원래배열을 2진수에서 10진수로 변환
    let bin = String(el);
    let hex = parseInt(bin, 2);
    return Number(hex);
  });
};
