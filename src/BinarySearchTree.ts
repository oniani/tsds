/*
A singly linked list data structure.
Author: David Oniani
License: MIT
*/


// A class to represent the nodes of the binary search tree
class TreeNode {
    private _value: null | number;
    private _left: null | TreeNode;
    private _right: null | TreeNode;
    private _parent: null | TreeNode;

    public constructor(value = null, left = null, right = null, parent = null) {
        this._value = value;
        this._left = left;
        this._right = right;
        this._parent = parent;
    }

    public get value(): number {
        return this._value;
    }

    public set value(value: number) {
        this._value = value;
    }

    public get left(): TreeNode {
        return this._left;
    }

    public set left(newNode: TreeNode) {
        this._left = newNode;
    }

    public get right(): TreeNode {
        return this._right;
    }

    public set right(newNode: TreeNode) {
        this._right = newNode;
    }

    public get parent(): TreeNode {
        return this._parent;
    }

    public set parent(newNode) {
        this._parent = newNode;
    }
}


// A class for the binary search tree
class BinarySearchTree {
    // The variable to store the root of the binary search tree
    private _root: TreeNode;

    // A binary search tree constructor
    constructor() {
        this._root = null;
    }

    // Helper function for the 'insert' function
    private _insert(current: TreeNode, value: number): undefined {
        if (current.value === value) {
            throw new Error("Binary search tree does not allow duplicate nodes!");
        }

        if (current.value > value) {
            if (current.left === null) {
                current.left = new TreeNode(value);
                current.left.parent = current;
                return;
            }
            return this._insert(current.left, value);
        }

        if (current.value < value) {
            if (current.right === null) {
                current.right = new TreeNode(value);
                current.right.parent = current;
                return;
            }
            return this._insert(current.right, value);
        }
    }

    // Insert the new node to the binary search tree
    public insert(value: number): void {
        if (this._root === null) {
            this._root = new TreeNode(value);
        }
        else {
            this._insert(this._root, value);
        }
    }

    // Helper function for the 'preorderTraversal' function
    private _preorderTraversal(current: TreeNode): void {
        if (current) {
            console.log(current.value);
            this._preorderTraversal(current.left);
            this._preorderTraversal(current.right);
        }
    }

    // Preorder traversal of the binary search tree
    public preorderTraversal(): void {
        if (this._root === null) {
            throw new Error("The tree is empty!");
        }

        this._preorderTraversal(this._root);
    }

    // Helper function for the 'inorderTraversal' function
    private _inorderTraversal(current: TreeNode): void {
        if (current) {
            this._inorderTraversal(current.left);
            console.log(current.value);
            this._inorderTraversal(current.right);
        }
    }

    // Inorder traversal of the binary search tree
    public inorderTraversal(): void {
        if (this._root === null) {
            throw new Error("The tree is empty!");
        }

        this._inorderTraversal(this._root);
    }

    // Helper function for the 'postorderTraversal' function
    private _postorderTraversal(current: TreeNode): void {
        if (current) {
            this._postorderTraversal(current.left);
            this._postorderTraversal(current.right);
            console.log(current.value);
        }
    }

    // Postorder traversal of the binary search tree
    public postorderTraversal(): void {
        if (this._root === null) {
            throw new Error("The tree is empty!");
        }

        this._postorderTraversal(this._root);
    }

    // Helper function for the 'getLeftMost' function
    private _getLeftMost(current: TreeNode): number {
        if (current.left === null) {
            return current.value;
        }

        return this._getLeftMost(current.left);
    }

    // Get the leftmost value of the binary search tree
    public getLeftMost(): number {
        if (this._root === null) {
            throw new Error("The tree is empty!");
        }
    
        return this._getLeftMost(this._root);
    }

    // Helper function for the 'getRightMost' function
    private _getRightMost(current: TreeNode): number {
        if (current.right === null) {
            return current.value;
        }

        return this._getRightMost(current.right);
    }

    // Get the rightmost value of the binary search tree
    public getRightMost(): number {
        if (this._root === null) {
            throw new Error("The tree is empty!");
        }
    
        return this._getRightMost(this._root);
    }

    // Helper function for the 'deleteNode' function
    private _deleteNode(current: TreeNode, value: number): undefined {
        if (current.value > value) {
            this._deleteNode(current.left, value);
        }

        else if (current.value < value) {
            this._deleteNode(current.right, value);
        }

        else {
            if (current.left === null && current.right === null) {
                if (current.parent.left === current) {
                    current.parent.left = null;
                }
                else {
                    current.parent.right = null;
                }
                return;
            }

            if (current.left !== null && current.right === null) {
                current.value = current.left.value;
                current.left = null;
                return;
            }

            if (current.left === null && current.right !== null) {
                current.value = current.right.value;
                current.right = null;
                return;
            }

            if (current.left !== null && current.right !== null) {
                current.value = this._getLeftMost(current.right);
                current = current.right;
                if (current.left === null) {
                    current.parent.right = null;
                }
                else {
                    while (current.left !== null) {
                        current = current.left;
                    }
                    current.parent.left = null;
                }
                return;
            }
        }
    }

    // Delete node of the binary search tree
    public deleteNode(value: number): void {
        if (this._root === null) {
            throw new Error("The tree is empty!");            
        }

        this._deleteNode(this._root, value);
    }
}


function testBinarySearchTree() {
    console.log("Testing...")
    let bst = new BinarySearchTree();

    bst.insert(5);
    bst.insert(6);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);
    bst.insert(4);

    bst.preorderTraversal()
    
    console.log("\n");
    
    bst.inorderTraversal();
    
    console.log("\n");
    
    bst.postorderTraversal();

    console.log("\n");
    
    console.log(bst.getLeftMost());
    console.log(bst.getRightMost());

    console.log("\n");
    
    bst.deleteNode(6);

    bst.inorderTraversal();  // 2 3 4 5 7
    
    console.log("\n");

    bst.deleteNode(7);
    
    bst.inorderTraversal();  // 2 3 4 5

    console.log("\n");

    bst.deleteNode(3);
    
    bst.inorderTraversal();  // 2 4 5
}


testBinarySearchTree();
