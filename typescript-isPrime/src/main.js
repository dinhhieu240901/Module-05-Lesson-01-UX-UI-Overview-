function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sumOfPrimes = 0;
for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
        sumOfPrimes += arr[i];
    }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + sumOfPrimes);
