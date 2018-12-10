/*
A singly linked list data structure.

Author: David Oniani
*/


class TreeNode {
    private _value: null | number;
    private _left: null | TreeNode;
    private _right: null | TreeNode;
    private _parent: null | TreeNode;

    public constructor(value=null, left=null, right=null, parent=null) {
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
}


// A class for the linked list
class BinarySearchTree {
    private root;

    constructor() {
        this.root = null;
    }

    private _insert(current: TreeNode, value: number): TreeNode {
        if (current.getValue() > value) {
            if (current.getLeft() === null) {
                current.setLeft(TreeNode())
            }
        }
    }

    public insert(value: number): void {
        if (this.root === null) {
            this.root = new TreeNode(value);
        }
        else {
            this._insert(this.root, value);
        }
    }
}


function testBinarySearchTree() {
    console.log("Testing...")
}

testBinarySearchTree();
