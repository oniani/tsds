/*
A stack data structure.

Author: David Oniani
*/


//
// NOTE 1: When throwing exceptions, keyword 'new' is not needed yet, it is a good practice to include it
// and is recommended by several style guides and related tooling.
//
// NOTE 2: Unlike class-based languages, JavaScript does not require a main method.
// Since TypeScript is a superset of JavaScript, all JavaScript code is also valid TypeScript, and therefore doesn't need a main.
// So, you can call your Object (JavaScript) or Class (TypeScript) anything you'd like - Main, DoThis etc. and all are equally valid
// and can be invoked by calling, just as you've done.
//
// They can also be invoked by:
//                  • Event handlers
//                  • A framework's system, such as the data-main attribute used by some MVC/JavaScript systems.
//
//
// NOTE 3: Typescript "TRANSPILES" into JavaScript. People argue whether it is a scripting language or not since it
// does not compile to bytecode but gets transalated into native JavaScrupt.
//
// NOTE 4: Although braces around 'if' statements and 'for' loops are not required, it is a good practice to use them.
// If one accidentally omits one, Typescript won't compile. Hence, be safe, use braces!
//


// A class for the stack
class Stack {
    // A variable to store the items of the stack
    private items: any[];

    // The clas constructor
    public constructor() {
        this.items = [];
    }

    // Get the size of the stack
    public size(): number {
        return this.items.length;
    }

    // Push an item onto the stack
    public push(item: any): void {
        this.items.push(item);
    }

    // Get the top of the stack
    public top(): number {
        if (this.items === []) {
            throw new Error("Cannot get the top of the empty stack!");
        }

        return this.items[this.items.length - 1];
    }

    // Pop the item from the stack
    public pop(): number {
        if (this.items.length === 0) {
            throw new Error("Cannot pop the empty stack!");
        }

        let last = this.items[this.items.length - 1];
        this.items.splice(this.items.length - 1, 1);

        return last;
    }

    // Check if the stack is empty
    public isEmpty(): boolean {
        return this.items === [];
    }

    // Clear the stack
    public clear(): void {
        this.items = [];
    }

    // Show the stack
    public show(): void {
        console.log("Stack", this.items);
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
