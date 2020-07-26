export class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
export class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new BSTNode(value);
        if (this.root === null) {
            this.root = newNode;
            return newNode;
        }
        const head = this._findHead(value);
        value > head.value
            ? head.right = newNode
            : head.left = newNode;
        return this._traverse(this.root);
    }
    lookup(value) {
        if (this.root === null)
            return false;
        let head = this.root;
        while (head !== null) {
            if (value === head.value)
                return true;
            head =
                value > head.value ? head.right : head.left;
        }
        return false;
    }
    _findHead(value) {
        if (this.root === null)
            return null;
        let head = this.root;
        while (true) {
            if (value > head.value) {
                if (head.right === null)
                    return head;
                head = head.right;
            }
            else {
                if (head.left === null)
                    return head;
                head = head.left;
            }
        }
    }
    _traverse(node) {
        const tree = { value: node.value };
        tree.left = node.left === null ? null : this._traverse(node.left);
        tree.right = node.right === null ? null : this._traverse(node.right);
        return tree;
    }
}
