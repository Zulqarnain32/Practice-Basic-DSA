class Graph {
    constructor(){
        this.data = [];
    }

    addVertex(v){
        if (!this.data[v]) {
            this.data[v] = [];
        }
    }

    addEdge(v1, v2){
        if (!this.data[v1]) {
            this.addVertex(v1);
        }
        if (!this.data[v2]) {
            this.addVertex(v2);
        }
        this.data[v1].push(v2);
        this.data[v2].push(v1);
    }

    removeEdge(v1, v2){
        if (this.data[v1]) {
            this.data[v1] = this.data[v1].filter(elm => elm !== v2);
        }
        if (this.data[v2]) {
            this.data[v2] = this.data[v2].filter(elm => elm !== v1);
        }
    }

    removeVertex(v){
        if (!this.data[v]) return;
        while (this.data[v].length) {
            const adjacentVertex = this.data[v].pop();
            this.removeEdge(v, adjacentVertex);
        }
        delete this.data[v];
    }

    traverse(start) {
        const result = [];
        const visited = {};
        const stack = [start];
        // console.log(stack);

        while (stack.length) {
            // console.log("curr stack length ", stack.length);
            const vertex = stack.pop();
            console.log("after pop ", stack);

            if (!visited[vertex]) {
                // console.log("visited ", !visited[vertex]);

                visited[vertex] = true;
                console.log("vertex ", vertex);
                result.push(vertex);
                this.data[vertex].forEach(neighbor => {
                    if (!visited[neighbor]) {
                        // console.log("count",neighbor);
                        stack.push(neighbor);
                        console.log("af stack ",neighbor);
                    }
                });
            }
        }

        return result;
    }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "C");
graph.addEdge("A", "B");
graph.addEdge("C", "B");
graph.addEdge("D", "B");


console.log(graph.data);

// Traverse the graph starting from vertex "A"
console.log("DFS Traversal from A:", graph.traverse("A"));


