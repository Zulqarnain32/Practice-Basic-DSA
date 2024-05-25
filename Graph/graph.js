class Graph {
   constructor(){
     this.data = []
   }

   addVertex(val){
       this.data[val] = []
   }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
console.log(graph.data);