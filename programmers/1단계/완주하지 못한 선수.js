// (ver. 효율성 not good)
function solution(participant, completion) {
    var answer = '';
    // participant 배열의 요소에 대해 
    // completion에서 index값을 구한다. (map이용) 
    // -1에 해당하는 participant 요소를 리턴
    // (3, 0, 3, 1)과 같이 같은 수가 두번 있을 경우 그 숫자에 해당하는 particiment 요소를 리턴

    let whoIsLooser = participant.map(function(name){
        return completion.indexOf(name);
    });
    
    if (whoIsLooser.includes(-1)){
        answer = participant[whoIsLooser.indexOf(-1)];
    } else {
        for (let i = 0; i < whoIsLooser.length; i++){
            for (let j = i + 1; j < whoIsLooser.length; j++){
            if (whoIsLooser[i] === whoIsLooser[j]) {
                answer = participant[i]
            }
         }
       }
    }
    return answer;
}


// (ver. 효율성 good)

function solution(participant, completion) {
    var answer = '';
    participant.sort(); // 각 배열을 정렬
    completion.sort();
    for (let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) {
        answer = participant[i];
        break;
        }
    }
   return answer;
}
