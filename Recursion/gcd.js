function gcd(n1,n2){
    console.log(n1,n2);
    if (n2 === 0) {
        return n1;
      }
   return gcd(n2,n1%n2)
}
console.log(gcd(48,18));