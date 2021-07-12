const LinkedList = require("./linkedinList")

let lList = new LinkedList()
lList.add(2);
lList.add(3);
lList.add(4);
lList.add(5);
lList.add(6);
lList.add(7);
lList.add(8);

lList.print();

var reverseList = function(head) {
    let current = head;
    let prev = null;
    let next = null;
    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head = prev;
    return head;
};


const result = reverseList(lList);
console.log(result)
lList.print()



/* 

reverse a linkedLIst by recusrion 

*/

function reverseByRecursion (head){
    let rest;
    var rec = function (head){
        if(head === null  ||  head.next === null){
            return head
        }
        rest = rec(head.next);
        head.next.next = head;
        head.next =  null;
        return rest
    }
    return rec(head);
}



const rr= reverseByRecursion(lList);
console.log(rr)
lList.print()