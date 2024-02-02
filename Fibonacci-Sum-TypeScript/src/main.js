function fibonacci(num) {
    if (num < 2) {
        return num;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
var sum = 0;
for (var i = 0; i <= 32; i++) {
    var fibonacciNumber = fibonacci(i);
    console.log(fibonacciNumber);
    sum += fibonacciNumber;
}
console.log("Sum of the first 32 Fibonacci numbers is:" + sum);
function fibonacci1(num) {
    var fibonacciNumbers = [1, 1];
    for (var i = 2; i < num; i++) {
        fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]);
    }
    return fibonacciNumbers;
}
var fibonacciNumbers1 = fibonacci1(32);
var sum1 = 0;
for (var i = 0; i < fibonacciNumbers1.length; i++) {
    console.log(fibonacciNumbers1[i]);
    sum1 += fibonacciNumbers1[i];
}
console.log("Sum of the first 10 Fibonacci numbers is: ".concat(sum1));
// Hàm không truyền tham số vào và trả về kiểu any
function createArray() {
    var arr = [1, 1];
    for (var i = 2; i < 32; i++) {
        var nextNumber = arr[i - 1] + arr[i - 2];
        arr.push(nextNumber);
    }
    return arr;
}
// Hàm nhận một mảng và in ra mảng và tổng của các phần tử trong mảng
function printArrayAndSum(arr) {
    console.log("Mảng: ", arr);
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        sum += num;
    }
    console.log("Tổng: ", sum);
}
// Sử dụng hai hàm trên
var arr = createArray();
printArrayAndSum(arr);
