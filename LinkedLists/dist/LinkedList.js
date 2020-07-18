export class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}
export class LinkedList {
    constructor(value) {
        this.head = new ListNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new ListNode(value);
        this._connectNodes(this.tail, newNode);
        this.tail = newNode;
        this.length++;
        return this.tail;
    }
    prepend(value) {
        const newNode = new ListNode(value);
        this._connectNodes(newNode, this.head);
        this.head = newNode;
        this.length++;
        return this.head;
    }
    insert(value, index) {
        if (index === 0)
            return this.prepend(value);
        if (index >= this.length)
            return this.append(value);
        const newNode = new ListNode(value);
        const nodeBeforeIndex = this._getNodeAtIndex(index - 1);
        const currentNode = nodeBeforeIndex.next;
        this._connectNodes(nodeBeforeIndex, newNode);
        this._connectNodes(newNode, currentNode);
        this.length++;
        return newNode;
    }
    remove(index) {
        if (index >= this.length)
            return -1;
        if (index === 0) {
            this.head = this.head.next;
        }
        else {
            const nodeBeforeIndex = this._getNodeAtIndex(index - 1);
            const nodeToRemove = nodeBeforeIndex.next;
            this._connectNodes(nodeBeforeIndex, nodeToRemove.next);
        }
        this.length--;
        return this.length;
    }
    reverse() {
        let previous = null;
        let current = this.head;
        let savedPointer = null;
        this.tail = this.head;
        while (current) {
            savedPointer = current.next;
            current.next = previous;
            previous = current;
            current = savedPointer;
        }
        this.head = previous;
        return this;
    }
    printList(order = 'asc') {
        const resultArray = [];
        let currentNode = order === 'asc' ? this.head : this.tail;
        do {
            resultArray.push(currentNode.value);
            currentNode = order === 'asc' ? currentNode.next : currentNode.previous;
        } while (currentNode !== null);
        return resultArray;
    }
    _getNodeAtIndex(index) {
        if (index >= this.length - 1)
            return this.tail;
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    _connectNodes(node1, node2) {
        if (node1 === null && node2 === null)
            return;
        if (node1)
            node1.next = node2;
        if (node2)
            node2.previous = node1;
    }
}
