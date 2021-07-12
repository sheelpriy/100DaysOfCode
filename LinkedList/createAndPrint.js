const LinkedList = require("./linkedinList")

let lList = new LinkedList()
lList.add(2);
lList.add(3);
lList.add(4);
lList.add(7);
lList.add(9);
lList.add(11);
lList.add(12);

console.log('size of list : ', lList.size);
console.log(lList)
lList.insertAt(99, 1);
console.log(lList)
console.log('size of list after inserting one node : ', lList.size, 8===lList.size);
lList.removeFrom(1);
console.log(lList)
// console.log(JSON.stringify(lList))