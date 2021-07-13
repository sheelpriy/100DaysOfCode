/* 
Q. Given a binary search tree, find the Kth smallest number, 
you can assume that k is always valid.

Example :
              3
           /    \
         1       4
          \       
            2
2nd minimum number is 2
*/

const BinarySearchTree = require("./BinarySearchTree");
var BST =  new BinarySearchTree();
let root  =  BST.insert(null, 6);
root  =  BST.insert(root, 4);
root  =  BST.insert(root, 3);
root  =  BST.insert(root, 7);
root  =  BST.insert(root, 1);
root  =  BST.insert(root, 9);
// console.dir(JSON.stringify(root));
// var tree = {
//     "data": 6,
//     "left": {
//         "data": 4,
//         "left": {
//             "data": 3,
//             "left": {
//                 "data": 1,
//                 "left": null,
//                 "right": null
//             },
//             "right": null
//         },
//         "right": null
//     }, "right": {
//         "data": 7,
//         "left": null,
//         "right": {
//             "data": 9,
//             "left": null,
//             "right": null
//         }
//     }
// }

function findKthMin(root, k){
    // can put check k < tree.height
    let records = [0, 0];
    function inOrder(root, k, records){
        if(root===null){
            return ;
        }

        inOrder(root.left, k, records);
        if(++records[0]===k){
            records[1]= root.data;
            return;
        }
        inOrder(root.right, k, records);
    }
    inOrder(root, k, records);
    return records[1];

}

const result  = findKthMin(root, 2);
console.log(result)