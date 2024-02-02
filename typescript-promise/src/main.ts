let money=10000;
const buyCar = (car:any)=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 10000) {
                resolve("can buy car" + car);
            } else {
                reject("Do not enough money to buy carr");
            }
        }, 100)
    })
}

money  = 10001;
const promise = buyCar("Vinfast").then(value=>{
    console.log(value);
},error =>{
    console.error(error);
});