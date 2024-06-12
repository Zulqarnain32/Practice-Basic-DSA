class Node {
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BSTree {
    constructor(){
        this.root = null
    }

    makeTree(val){
        let newNode = new Node(val)
        if(this.root == null){
            this.root = newNode
        } else {
            this.insertNode(this.root,newNode)
        }

    }

    insertNode(root,newNode){
        if(root.val > newNode.val){
            if(root.left == null){
                root.left = newNode
            } else {
                this.insertNode(root.left,newNode)
            }
        } 
        else {
            if(root.right == null){
                root.right = newNode
            } else {
                this.insertNode(root.right,newNode)
            }
        }

    }
}

const bst = new BSTree()

bst.makeTree(20)
bst.makeTree(10)
bst.makeTree(30)
bst.makeTree(5)
bst.makeTree(15)
bst.makeTree(25)
bst.makeTree(35)
console.log(bst.root);