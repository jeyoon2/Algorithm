function solution(numbers) {
    var answer = [];
    
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 1; j < numbers.length; j++) {
          if (i < j) { 
             let result = numbers[i] + numbers[j]; 
             if(!answer.includes(result)) {
                 answer.push(result)
               } 
          }    
        } 
    }
    return answer.sort(function(a,b) {
          return a-b;
    });
}
