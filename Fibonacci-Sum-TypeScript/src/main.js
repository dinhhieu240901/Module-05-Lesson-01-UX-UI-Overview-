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
console.log("Sum of the first 10 Fibonacci numbers is:" + sum);
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
