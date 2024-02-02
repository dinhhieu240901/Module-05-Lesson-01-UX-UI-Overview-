var sum = 0;
var count = 0;
var primes = [];
for (var i = 2; count <= 30; i++) {
    var isPrime = true;
    if (i === 2) {
        primes.push(i);
        sum += i;
        count++;
        continue;
    }
    for (var j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (!isPrime) {
        continue;
    }
    primes.push(i);
    sum += i;
    count++;
}
console.log("First 30 prime numbers: ".concat(primes));
console.log("Sum of the first 30 prime numbers: ".concat(sum));
