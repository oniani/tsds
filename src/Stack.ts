/*
 * A stack data structure.
 * Author: David Oniani
 * License: MIT
 * 
*/

export = Stack;

// A class for the stack
class Stack {
    // A variable to store the items of the stack
    private _items: any[];

    // A stack constructor
    public constructor() {
        this._items = [];
    }

    // Get the size of the stack
    public size(): number {
        return this._items.length;
    }

    // Push an item onto the stack
    public push(item: any): void {
        this._items.push(item);
    }

    // Get the top of the stack
    public top(): number {
        if (this._items === []) {
            throw new Error("Cannot get the top of the empty stack!");
        }

        return this._items[this._items.length - 1];
    }

    // Pop the item from the stack
    public pop(): number {
        if (this._items.length === 0) {
            throw new Error("Cannot pop the empty stack!");
        }

        let last = this._items[this._items.length - 1];
        this._items.splice(this._items.length - 1, 1);

        return last;
    }

    // Check if the stack is empty
    public isEmpty(): boolean {
        return this._items === [];
    }

    // Clear the stack
    public clear(): void {
        this._items = [];
    }

    // Show the stack
    public show(): void {
        console.log("Stack", this._items);
    }

    // Build the stack from the array
    public fromArray(array: any[]): Stack {
        let stack = new Stack();

        for (let i = 0; i < array.length; i++) {
            stack.push(array[i]);
        }

        return stack;
    }
}


function testStack() {
    console.log("Testing...");
    
    // Initialize the stack
    let stack = new Stack();
    stack.push(1);
    stack.push("crunchyArray");
    stack.push(3);
    stack.push(0.12);
    stack.push(1 / 3);
    stack.push(2 / 4);
    stack.push(6 * 7);
    stack.show();

    // Test the 'push' method
    stack.push(2);
    stack.push(3);
    stack.push(4);

    // Test the rest
    stack.show();
    console.log(stack.isEmpty());
    stack.pop();
    console.log(stack.pop());
    stack.show();
    console.log(stack.top());
    stack.clear();
    stack.show();

    // See if the exception works properly
    let error_stack = new Stack();
    error_stack.pop();
}


testStack();
