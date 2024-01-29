function fibonacci(num:number):number{
    if(num<2){
        return num;
    }
    else{
        return fibonacci(num-1)+ fibonacci(num-2)
    }
}
let sum:number = 0;
for(let i = 0 ;i<=32;i++){
    let fibonacciNumber = fibonacci(i);
    console.log(fibonacciNumber);
    sum+=fibonacciNumber;
}
console.log(`Sum of the first 32 Fibonacci numbers is:`+sum);

function fibonacci1(num: number): number[] {
    let fibonacciNumbers: number[] = [1, 1];
    for (let i = 2; i < num; i++) {
        fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]);
    }
    return fibonacciNumbers;
}

let fibonacciNumbers1: number[] = fibonacci1(32);
let sum1: number = 0;
for (let i = 0; i < fibonacciNumbers1.length; i++) {
    console.log(fibonacciNumbers1[i]);
    sum1 += fibonacciNumbers1[i];
}
console.log(`Sum of the first 10 Fibonacci numbers is: ${sum1}`);