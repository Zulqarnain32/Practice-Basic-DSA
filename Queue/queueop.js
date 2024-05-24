const queue = [];

let queueLength = queue.length;
console.log(queueLength);



function enqueue(elm){
  queue[queueLength] = elm
  queueLength++
  console.log(queue);
}

function dequeue(){
    for(let i = 0; i < queueLength-1; i++){
        queue[i] = queue[i+1]
    }
    queue.length-=1
    console.log(queue);
   
}

enqueue(100)
enqueue(200)
enqueue(300)
dequeue();
dequeue();
