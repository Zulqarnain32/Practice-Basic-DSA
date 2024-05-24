const stack = [];

let maxElm = 5;

let currentSize = stack.length;

function push(elm) {
    if(currentSize >= maxElm){
        console.log("element ",elm + " can't added");
    } else {
        stack[currentSize] = elm;
        currentSize += 1;
    }
  
}

function pop() {
  currentSize -= 1;
  stack.length = currentSize;
}

push(100);
push(200);
push(300);
push(400);
push(500);
push(600);
push(700);

pop()
pop()
// pop()

console.log(stack);



