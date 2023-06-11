
// (반복문 이용)
function solution(array, commands) {

  let result = [];
  
    for (let i = 0; i < commands.length; i++) {
        
        let newArr = (array.slice(commands[i][0] - 1, commands[i][1])).sort(function(a,b) {
            return a-b;
        });
        result.push(newArr[commands[i][2] - 1]);
        }
    return result;
}

// (map 함수 이용)
function solution(array, commands) {
// map 함수를 이용해 배열 commands를 바꾸어 리턴해준다
    return commands.map(function(arr) {
        
        return ((array.slice(arr[0] - 1, arr[1])).sort(function(a, b) {
            return a - b;
        }))[arr[2] - 1];
        
    });
}

