export class ListNode {
  value: any
  next: ListNode | null

  constructor(value: any) {
    this.value = value
    this.next = null
  }
}

export class LinkedList {
  head: ListNode
  tail: ListNode
  length: number

  constructor(value: any) {
    this.head = new ListNode(value)
    this.tail = this.head
    this.length = 1
  }

  append(value: any) {
    const newNode = new ListNode(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++

    return this.tail
  }

  prepend(value: any) {
    const newNode = new ListNode(value)
    newNode.next = this.head
    this.head = newNode
    this.length++

    return this.head
  }

  insert(value: any, index: number) {
    if (index === 0) return this.prepend(value)
    if (index >= this.length) return this.append(value)
    
    const newNode = new ListNode(value)
    const nodeBeforeIndex = this._getNodeAtIndex(index - 1)
    const currentNode = nodeBeforeIndex.next

    nodeBeforeIndex.next = newNode
    newNode.next = currentNode
    this.length++

    return newNode
  }

  remove(index: number): number {
    if (index >= this.length) return -1
    if (index === 0) {
      const nodeToRemove = this.head
      const nodeAfterIndex = nodeToRemove.next

      this.head = nodeAfterIndex
    } else {
      const nodeBeforeIndex = this._getNodeAtIndex(index - 1)
      const nodeToRemove = nodeBeforeIndex.next
      const nodeAfterIndex = nodeToRemove.next
  
      nodeBeforeIndex.next = nodeAfterIndex
    }
    this.length--

    return this.length
  }

  printList(): Array<any> {
    const resultArray = []

    let currentNode = this.head
    do {
      resultArray.push(currentNode.value)

      currentNode = currentNode.next
    } while (currentNode !== null)

    return resultArray
  }

  _getNodeAtIndex(index: number): ListNode {
    if (index >= this.length - 1) return this.tail

    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }

    return currentNode
  }
}
