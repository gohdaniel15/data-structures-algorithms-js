class MyArray {
  length: number
  data: { [key: number]: any }

  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index:number): any {
    this.data[index]
  }

  push(item:any): number {
    this.data[this.length] = item
    this.length++
    
    return this.length
  }

  pop(): any {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--

    return lastItem
  }

  delete(index: number): any {
    const item = this.data[index]
    this.shiftItems(index)

    return item
  }

  shiftItems(index: number) {
    for (let i=index; i < this.length -1; i++) {
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length -1]
    this.length--
  }
}