export class QueueNode {
  value: any
  next: QueueNode | null

  constructor(value: any) {
    this.value = value
    this.next = null
  }
}

export class Queue {
  head: QueueNode | null
  tail: QueueNode | null
  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  enqueue(value: any): number {
    const newNode = new QueueNode(value)
    if (this.length === 0) {
      this.head = this.tail = newNode    
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++

    return this.length
  }

  dequeue(): any {
    if (this.length === 0) {
      return this.length
    }

    const nodeToBeRemoved = this.head
    this.head = nodeToBeRemoved.next 
    this.length--

    return nodeToBeRemoved.value
  }

  peek() {
    return this.head && this.head.value
  }
}