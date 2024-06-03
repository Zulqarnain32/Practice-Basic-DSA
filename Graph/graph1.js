class Graph {
    constructor(){
        this.data = []
    }
    addVertex(v1,v2){
        this.data[v1] = []
        this.data[v2] = []
       
    }

    addEdge(v1,v2){
        if(!this.data[v1]){
           this.addVertex(v1)
        }
        if(!this.data[v2]){
            this.addVertex(v2)
         }
       this.data[v1].push(v2)
       this.data[v2].push(v1)
    }

    removeEdge(v1,v2){
        this.data[v1]=this.data[v1].filter((elm) => {
            return elm !== v2
        })
        this.data[v2]=this.data[v2].filter((elm) => {
            return elm !== v1
        })
    }

    removeVertex(v){
        for(let item of this.data[v]){
            this.removeEdge(v,item)
        }
        delete this.data[v]
    }
}

const graph = new Graph;

graph.addVertex("A",'B')
graph.addVertex("C",'D')

graph.addEdge("A","C");
graph.addEdge("A","B");
graph.addEdge("C","B");
graph.addEdge("D","B");

// graph.removeEdge("B","D")

graph.removeVertex("D")


console.log(graph.data);
