/* 
linkedin implementation in JS
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // adds an element at the end of list
    add(element) {
        // creates a new node
        let node = new Node(element);
        // to store current node
        let current;
        // if list is Empty add the
        // element and make it head
        if (this.head == null){
            this.head = node;
        }else {
            current = this.head;
            // find the last node
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
}



module.exports = LinkedList;