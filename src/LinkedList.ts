/*
 * Module: A singly linked list data structure
 * Author: David Oniani
 * License: MIT
 * 
*/

// A class to represent the nodes of the linked list
class ListNode {
    private _value: any;
    private _next: null | ListNode;

    public constructor(value = null) {
        this._value = value;
        this._next = null;
    }

    public get value(): any {
        return this._value;
    }

    public set value(value: any) {
        this._value = value;
    }

    public get next(): ListNode {
        return this._next;
    }

    public set next(newNode: ListNode) {
        this._next = newNode;
    }
}


// A class for the linked list
class LinkedList {
    // A variable to store the items of the linked list
    private head: any;
    private size: number;

    // A linked list constructor
    public constructor() {
        this.head = new ListNode();
        this.size = 0;
    }

    // Get the size of the linked list
    public length(): number {
        return this.size;
    }

    // Append the element to the linked list
    public append(value: any): void {
        let current = this.head;
        
        while (current.next !== null) {
            current = current.next;
        }

        current.next = new ListNode(value);
        this.size += 1;
    }

    // Insert the element at the particular index in the linked list
    public insert(index: number, value: any): void {
        let current = this.head;
        let tracker = 0;

        while (tracker < index - 1) {
            current = current.next;
            tracker += 1;
        }
        
        let temp = current.next;
        current.next = value;
        current.next.next = temp;
        this.size += 1;
    }

    // Remove the element at the particular index of the linked list
    public remove(index: number): void {
        if (index < 0 || index > this.size - 1) {
            throw new Error("Index out of bounds!");
        }

        let current = this.head;
        let tracker = 0;

        while (tracker < index) {
            current = current.next;
            tracker += 1;
        }

        current.next = current.next.next;
        this.size -= 1;
    }

    // Return the index of the value (in case of duplicate values, returns the smaller index)
    public index(value: number): number {
        let current = this.head;
        let tracker = 0;
        
        while (current.next.value !== value) {
            current = current.next;
            tracker += 1;
        }

        if (current.next.value !== value) {
            throw new Error("No such value exists!");
        }

        return tracker;
    }

    // Delete the value from a linked list (in case of duplicates, the one with less index gets deleted)
    public delete(value: any): void {
        let current = this.head;

        while (current.next.value !== value) {
            current = current.next;
        }

        if (current.next.value !== value) {
            throw new Error("No such value exists!");
        }

        current.next = current.next.next;
        this.size -= 1;
    }

    // Show the linked list
    public show(): void {
        let output = [];
        let current = this.head;

        while (current.next !== null) {
            current = current.next;
            output.push(current.value);
        }

        console.log("LinkedList", output);
    }

    // Build a linked list from the array
    public fromArray(array: any[]): LinkedList {
        let linkedList = new LinkedList();

        for (let i = 0; i < array.length; i++) {
            linkedList.append(array[i]);
        }

        return linkedList;
    }
}


function testLinkedList() {
    console.log("Testing...");

    // Test the linked list creation
    let linked_list = new LinkedList();

    // Test the append function
    for (let i = 0; i < 10; i++) {
        linked_list.append(i);
    }

    // Test the show function
    linked_list.show();

    // Test the fromArray function
    let new_linked_list = new LinkedList().fromArray([1, 2, 3]);
    new_linked_list.show();

    // Test the remove function
    linked_list.remove(2);
    linked_list.show();

    // Test the length function
    console.log(linked_list.length());
    console.log(new_linked_list.length());

    // Test the delete function
    linked_list.delete(1);
    linked_list.show();
    linked_list.delete(7);
    linked_list.show();

    // Test the index function
    console.log(linked_list.index(4));
    console.log(linked_list.index(9));
}


testLinkedList();
