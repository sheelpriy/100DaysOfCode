
//Node class
class Node{
    constructor(data){
        this.data = data;
        this.left=null;
        this.right=null;
    }
}; 

// Start of function BinarySearchTree
class BinarySearchTree {
    constructor() {
        this.root= null;
    }
    insert = function (root, data) {
        if (root === null) {
            this.root = new Node(data);
            return this.root;
        }

        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        return this.root;
    };

    getHeight = function (root) {
        let height = 0;
        let node = root ||  this.root;
        function rec(node, level) {
            if (!node) {
                return;
            }
            level++;
            height = level > height ? level : height;
            rec(node.left, level)
            rec(node.right, level)
        }
        rec(node, height);
        return height - 1;
    };
};


module.exports = BinarySearchTree;