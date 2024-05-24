const queue = [];

let queueLength = queue.length;



function enqueue(elm){
  queue[queueLength] = elm
  queueLength++
  // console.log(queue);
}

function dequeue(){
    for(let i = 0; i < queueLength-1; i++){
        queue[i] = queue[i+1]
    }
    queueLength--
    queue.length = queueLength
    // console.log("after del ", queue);
   
}

function front(){
   console.log(queue[0]);
}

function rear(){
  console.log(queue[queueLength -1]);
}

function display(){
  console.log(queue);
}

function isEmpty(){
  return queue.length === 0
}


// enqueue(100)
// enqueue(200)
// enqueue(300)
// dequeue();
// dequeue();


// front()