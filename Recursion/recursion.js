// function printNumbers(n) {
//     if (n <= 10) {
//       console.log(n);
//       printNumbers(n+1);
//     }
//   }
  
//   printNumbers(1);
  

function printFactorial(num){
    let sum = 1;
    for(let i = num; i > 0; i--){
        sum *= i
    }
    console.log("using loop factorial ", sum);
}
printFactorial(5)


function recursionFactorial(num) {
    if ( num === 1) {
      return 1;
    }
    return num * recursionFactorial(num - 1);
  }
  
  const result = recursionFactorial(6);
  console.log("using recursion factorial", result); 
  



  function findPower(num,power){
     let ans = 1;

     for(let i = 1; i <= power; i++){
       ans *= num  
     }

     console.log("using loop power", ans);
  }
  findPower(4,3);





  function power(x, n) {
    if (n === 0) {
      return 1;
    }
    return x * power(x, n - 1);
  }
  
  let resultPower = power(2,3)
  console.log("using recursion power ",resultPower); 
  

