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

    print(){
        let curr = this.head;
        while(curr){
            console.log(curr.data)
            curr = curr.next;
        }
    }

    // adds an element at the end of list
    add(element) {
        // creates a new node
        let node = new Node(element);
        // to store current node
        let current;
        // if list is Empty add the
        // element and make it head
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            // find the last node
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(element, index) {
        if (index < 0 || index > this.size)
            return console.log("Please enter a valid index.");
        else {
            const node = new Node(element);
            let curr, prev;
            curr = this.head;
            // first index
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let curIndex = 0;
                while (curIndex < index) {
                    curIndex++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    removeFrom(index){
        let curr = this.head;
        if (index < 0 || index >= this.size)
            return console.log("Please enter a valid index.");
        if (index == 0) {
            this.head = curr.next;
        } else {
            curr = this.head;
            let prev =null;
            let curIndex = 0;
            while (curIndex < index) {
                curIndex++;
                prev = curr;
                curr = curr.next;
            }
            prev.next = curr.next;
        }
        this.size--;
    }
}



module.exports = LinkedList;