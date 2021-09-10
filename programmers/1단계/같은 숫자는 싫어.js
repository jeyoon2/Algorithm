function solution(arr)
{
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1 || newArr[newArr.length - 1] !== arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
