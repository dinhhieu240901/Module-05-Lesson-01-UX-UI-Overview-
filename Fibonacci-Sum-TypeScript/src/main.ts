function fibonacci(num:number):number{
    //f(0) = 0 ; f(1) = 1;
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


// Hàm không truyền tham số vào và trả về kiểu any
function createArray(): any {
    let arr = [1, 1];
    for (let i = 2; i <= 32; i++) {
        let nextNumber = arr[i - 1] + arr[i - 2];
        arr.push(nextNumber);
    }
    return arr;
}

// Hàm nhận một mảng và in ra mảng và tổng của các phần tử trong mảng
function printArrayAndSum(arr: number[]): void {
    console.log("Mảng: ", arr);
    let sum = 0;
 // for(let num of arr) {
 //     sum += num;
 // }
    arr.forEach(num=>{
        sum+=num;
    })
    console.log("Tổng: ", sum);
}

// Sử dụng hai hàm trên
let arr = createArray();
printArrayAndSum(arr);