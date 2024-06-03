function test(n){
    if(n > 0){
        test(n-1)
    }
    console.log(n);
}
// test(5)

function fibonacci(n){
    if(n <=1){
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(5));