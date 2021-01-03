/*
 * A queue data structure.
 * Author: David Oniani
 * License: MIT
 * 
*/

export = Queue;

// A class for the queue
class Queue {
    // A variable to store the items of the queue
    private _items: any[];

    // The queue constructor
    public constructor() {
        this._items = [];
    }

    // Get the size of the queue
    public size(): number {
        return this._items.length;
    }

    // Enqueue an item onto the queue
    public enqueue(item: any): void {
        this._items.push(item);
    }

    // Get the top of the queue
    public top(): number {
        if (this._items === []) {
            throw new Error("Cannot get the top of the empty queue!");
        }

        return this._items[0];
    }

    // Dequeue the item from the queue
    public dequeue(): number {
        if (this._items.length === 0) {
            throw new Error("Cannot dequeue the empty queue!");
        }

        let last = this._items[0];
        this._items.splice(0, 1);

        return last;
    }

    // Check if the queue is empty
    public isEmpty(): boolean {
        return this._items === [];
    }

    // Clear the queue
    public clear(): void {
        this._items = [];
    }

    // Show the queue
    public show(): void {
        console.log("Queue", this._items);
    }

    // Build the queue from the array
    public fromArray(array: any[]): Queue {
        let queue = new Queue();

        for (let i = 0; i < array.length; i++) {
            queue.enqueue(array[i]);
        }

        return queue;
    }
}


function testQueue() {
    console.log("Testing...");
    
    // Initialize the queue
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue("crunchyArray");
    queue.enqueue(3);
    queue.enqueue(0.12);
    queue.enqueue(1 / 3);
    queue.enqueue(2 / 4);
    queue.enqueue(6 * 7);
    queue.show();

    // Test the 'enqueue' method
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    // Test the rest
    queue.show();
    console.log(queue.isEmpty());
    queue.dequeue();
    console.log(queue.dequeue());
    queue.show();
    console.log(queue.top());
    queue.clear();
    queue.show();

    // // See if the exception works properly
    // let error_queue = new Queue();
    // error_queue.dequeue();
}


testQueue();
