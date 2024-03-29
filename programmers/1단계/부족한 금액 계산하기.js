function solution(price, money, count) {
 // 100 + 200 + 300 + 400 = 100(1+2+3+4)
 // 200 + 400 + 600 = 200(1+2+3)
    
    let totalPrice = 0;
    for (let i = 1; i <= count; i++) {
        totalPrice += i;
    }
    totalPrice *= price;
    
    let result = totalPrice - money;
    if (result > 0) {
        return result;
    } else return 0;
}
