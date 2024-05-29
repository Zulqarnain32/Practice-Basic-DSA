let money = 50;
let totalApple = 0;
let applePrice = 5

function buyApple(money){
   if(money >= applePrice){
    money-=applePrice;
    totalApple++
    console.log("i have ", totalApple, "apple");
    console.log("and moneyleft is ", money);
      buyMore(money)
   }
}
buyApple(money)

function buyMore(moneyLeft){
    buyApple(moneyLeft)
}