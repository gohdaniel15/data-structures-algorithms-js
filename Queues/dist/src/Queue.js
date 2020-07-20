export class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
export class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    enqueue(value) {
        const newNode = new QueueNode(value);
        if (this.length === 0) {
            this.head = this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
        }
        this.length++;
        return this.length;
    }
    peek() {
        return this.head && this.head.value;
    }
}
