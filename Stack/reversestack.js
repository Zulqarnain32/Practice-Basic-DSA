const stack = [];
let maxElm = 5
let stackSize = stack.length;
function push(elm){
    if(stackSize < maxElm){
        stack[stackSize] = elm;
        stackSize +=1
    } else{
        console.log(`Element ${elm} not added`);
    }
}

function pop(){
    stackSize -=1;
    stack.length = stackSize
}

push(100)
push(200)
push(300)
push(400)
push(500)
push(600)
push(700)
// pop()
// pop()



    let reverseStack = [];
    let count = 0;
    for(let i = stack.length; i > 0; i--){
        reverseStack[count] = stack[i-1]
        count++
    }
  console.log(reverseStack );

console.log(stack);
