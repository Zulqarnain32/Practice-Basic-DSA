class stack {
    maxSize;
    item = [];
    constructor(size){
        this.currentSize = this.item.length
        this.maxSize = size
    }

    push(elm){
     this.item[this.currentSize] = elm;
     this.currentSize++
    }

    pop(){
       this.currentSize -=1 ;
       this.item.length = this.currentSize
    }

    display(){
      console.log(this.item);
    }
}

let st = new stack(5)

// console.log(st);