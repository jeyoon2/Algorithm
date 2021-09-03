
function solution(n) {
       //주어진 수 n을 뒤집힌 3진법으로 바꾼다.
        let ternary = [];
        while (n > 0) {
            ternary.push(n % 3); 
            n = Math.floor(n / 3); 
        }    
        let str = ternary.join('');
    
        //parseInt(str,3)을 이용해 10진수로 바꿔준 후 리턴한다.
        return parseInt(str, 3);
}
