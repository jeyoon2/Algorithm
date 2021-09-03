function solution(n) {

    let result = ""; 
    
     for (let i = 1; i <= n/2; i++) {
       result += "수박";
   }
      if (n % 2 === 0) {
         return result;
     } else {
         return result += "수";
     }
}
