function reverseString(str){
    if(str.length == 0 ){
       return ""
    }
    return str[str.length-1]+reverseString(str.slice(0,str.length-1))

}

let result = reverseString("hello")
console.log(result);


