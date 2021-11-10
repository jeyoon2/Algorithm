var isPrefixOfWord = function(sentence, searchWord) {
   
    // 문장을 공백으로 split해서 배열로 나눈다.
    // 배열의 요소의 시작부분이 searchWord인지 확인 -> 어떻게? 
    // 각 배열의 요소를 searchWord.length로 잘라서 리턴 (map)
    // 배열의 각 요소에 대해, searchWord와 일치하면 그 요소의 인덱스를 리턴
    
    let arr = sentence.split(' ');
    let output = -1;
    
    let newArr = arr.map(function(el) {
        return el.slice(0, searchWord.length);
    })
    
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === searchWord) {
            output = i + 1;
            break;
        }
    } 
    return output;
};

