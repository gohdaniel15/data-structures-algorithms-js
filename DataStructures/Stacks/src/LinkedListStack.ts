export class StackNode {
  value: any
  next: StackNode | null

  constructor(value: any) {
    this.value = value
    this.next = null
  }
}

export class LinkedListStack {
  top: StackNode | null
  bottom: StackNode | null
  length: number

  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  peek() {
    return this.top && this.top.value
  }

  push(value: any) {
    const newNode = new StackNode(value)
    if (this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      const previousNode = this.top
      this.top = newNode
      this.top.next = previousNode
    }
    this.length++

    return this.length
  }

  pop() {
    if (this.length === 0) return this.length

    const topToBeRemoved = this.top
    this.top = topToBeRemoved.next
    if (this.top === null) this.bottom = null
    this.length--
    
    return topToBeRemoved.value
  }
}