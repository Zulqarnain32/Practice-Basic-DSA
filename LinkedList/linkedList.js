// Define a ListNode class
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Function to insert a node at the end of the linked list
function insertAtEnd(head, value) {
    let newNode = new ListNode(value);
    if (!head) {
        return newNode;
    }
    let current = head;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = newNode;
    return head;
}

// Function to search for a value in the linked list
function searchLinkedList(head, target) {
    let current = head;
    while (current !== null) {
        if (current.value === target) {
            return true;
        }
        current = current.next;
    }
    return false;
}

// Function to delete a node with a specific value from the linked list
function deleteNode(head, target) {
    if (!head) {
        return null;
    }
    if (head.value === target) {
        return head.next;
    }
    let current = head;
    while (current.next !== null) {
        if (current.next.value === target) {
            current.next = current.next.next;
            return head;
        }
        current = current.next;
    }
    return head;
}

// Function to reverse the linked list
function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;
}

// Example usage
let head = new ListNode(1);
head = insertAtEnd(head, 2);
head = insertAtEnd(head, 3);

console.log("Original Linked List:");
printLinkedList(head);

console.log("Is 2 in the linked list?", searchLinkedList(head, 2)); // true
console.log("Is 4 in the linked list?", searchLinkedList(head, 4)); // false

head = deleteNode(head, 2);
console.log("Linked list after deleting 2:");
printLinkedList(head);

head = reverseLinkedList(head);
console.log("Reversed Linked List:");
printLinkedList(head);

// Function to print the linked list
function printLinkedList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
}
