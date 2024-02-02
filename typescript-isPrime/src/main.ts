function isPrime(n: number): boolean {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumOfPrimes: number = 0;

for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
        sumOfPrimes += arr[i];
    }
}
console.log("Tổng các số nguyên tố trong mảng trên là: " + sumOfPrimes);
