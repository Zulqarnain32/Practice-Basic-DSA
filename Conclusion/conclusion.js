// let array = []

// function addVertex(val){
//     array[val] = []
// }

// function addEdge(v1,v2){

//     if(!array[v1]){
//        addVertex(v1)
//     }

//     if(!array[v2]){
//        addVertex(v2)
//     } 

//   array[v1].push(v2)
//   array[v2].push(v1)
// }

// addVertex("A")
// addVertex("B")
// addVertex("C")
// addVertex("D")

// addEdge("A","C")
// addEdge("A","B")
// addEdge("B","D")
// addEdge("B","C")
// addEdge("F","H")
// addEdge("G","F")
// console.log(array);


const result = [];
const visited = {}

const stack = ["A"]
console.log(stack);
const vertex = stack.pop();

console.log(!visited[stack]);
visited[vertex] = true;
console.log(vertex);