/* 
Q: A level-order traversal, also known as a breadth-first search, visits each level of a tree's nodes from left to right,
 top to bottom. You are given a pointer, ,
  pointing to the root of a binary search tree.
Complete the levelOrder function provided in your editor so that it prints the level-order traversal of the binary search tree. 

tree:
0//            3
1//        2       5
2//    1       4       7

level order: 3-->2-->5-->1-->4-->7
*/

const BinarySearchTree = require('./BinarySearchTree.js');
var tree =  new BinarySearchTree();
var root = null;
root = tree.insert(null, 3)
root = tree.insert(root, 5)
root = tree.insert(root, 4)
root = tree.insert(root, 7)
root = tree.insert(root, 2)
root = tree.insert(root, 1)

const levelOrder = function (root) {
    let level = 0;
    let node = root;
    let queue = [];
    function print(node, l) {
        if (!node) {
            return
        }
        if (!!queue[l]) {
            queue[l].push(node.data);
        } else {
            queue[l] = [node.data];
        }
        l++;
        print(node.left, l);
        print(node.right, l);
    }
    print(node, level);
    let str = '';
    queue.forEach((l) => {
        l.forEach((n) => { str += `${n} ` })
    })
    console.log(str);

};

module.exports = levelOrder(root);