function arrayProduct(arr){
    if(arr <= 0){
        return 1
    }
  
   return arr[arr.length -1] * arrayProduct(arr.slice(0,arr.length-1))
}
const result = arrayProduct([1,2,3,4])
console.log("array product ", result);


function factorial(n){
    if(n == 0){
        return 1
    }
  return n * factorial(n-1)
}
const result1 = factorial(3)
console.log("factorial ", result1);



function rangeOfNumbers(start,end){
    if(end < start){
        return []
    }
    const numbers = rangeOfNumbers(start,end-1)
    numbers.push(end)
    return numbers
}
const result2 = rangeOfNumbers(1,5)
console.log(result2);