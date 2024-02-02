let sum: number = 0;
let count: number = 0;
let primes: number[] = [];
for (let i = 2; count <= 30; i++) {
    let isPrime: boolean = true;
    if (i === 2) {
        primes.push(i);
        sum += i;
        count++;
        continue;
    }
    for (let j = 2; j <= Math.sqrt(i); j++) {
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
console.log(`First 30 prime numbers: ${primes}`);
console.log(`Sum of the first 30 prime numbers: ${sum}`);
