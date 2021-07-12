/* 
Q:  deletes any duplicate nodes from the list and returns the head of the updated list
Input: 1->2 ->2 ->3->3->4
Outpur: 1->2->3->4

Node :
 class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
*/
const LinkedList = require("./linkedinList")

let lList = new LinkedList()
lList.add(1);
lList.add(2);
lList.add(2);
lList.add(3);
lList.add(3);
lList.add(5);
lList.add(7);
lList.add(8);

lList.print();
console.log("-------------")


function removeDuplicate(head) {
    var hs = new Set();
    var current = head;
    var prev = null;
    while (current != null) {
        var curval = current.data;

        // If current value is seen before
        if (hs.has(curval)) {
            prev.next = current.next;
        } else {
            hs.add(curval);
            prev = current;
        }
        current = current.next;
    }
    return head;
}

let uniqueLinkedList = removeDuplicate(lList.head);
lList.display(uniqueLinkedList);

// function display(ul) {
//     var start = ul;
//     while (start) {
//         console.log(start.data + " ");
//         start = start.next;
//     }
// }
// display(uniqueLinkedList);