class List {
    constructor(data){
       this.head = {
        value:data,
        next:null,
       };
       this.tail = this.head;
       this.size = 1;
    }

    appendNode(nodeData){
        let newNode = {
            value:nodeData,
            next:null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.size +=1;
    }

    traversing(){
        let counter = 1;
        let currentNode = this.head;
        while(counter <= this.size){
            // console.log(currentNode);
            currentNode = currentNode.next
            counter++;
        }
    }

    deleteNode(index){
        let counter = 1;
        let lead = this.head
      if(index === 1){
        this.head = this.head.next
      } else{
        while(counter < index-1){
            console.log(counter);
            lead = lead.next;
            counter++
        }
        let nextNode = lead.next.next;
        lead.next = nextNode
        console.log('lead node ',lead);
      }
    }

    searchNode(val){
       let lead = this.head
       let loop = true;
       let result = "";
       while(loop){
        lead = lead.next
        loop = !!lead
        console.log(loop);
        if(lead && lead.value == val){
            loop = false;
            result = lead
        }
       }
       console.log('searched node ',result);
    }
    
}

let list = new List(200);//elm 1
list.appendNode(300)//elm 2
list.appendNode(400)//elm 3
list.appendNode(500)//elm 4
list.appendNode(600)//elm 5
list.appendNode(700)//elm 6
list.traversing()
// list.deleteNode(3)

list.searchNode(300)

console.log(list);

let name = null


