export default class HashTable {
  data: Array<any>

  constructor(size: number) {
    this.data = new Array(size)
  }

  _hash(key: string): number {
    if (typeof key !== 'string') throw new Error("Key must be a string");
    
    let hash = 0
    for (let i=0; i<key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }

    return hash
  }

  set(key: string, value: string | number): [string, string | number] {
    const index = this._hash(key)
    if (!this.data[index]) {
      this.data[index] = []
    }
    this.data[index].push([key, value])
    
    return [key, value]
  }

  get(key: string): string | number | undefined {
    const index = this._hash(key)

    const currentBucket = this.data[index]
    if (currentBucket && currentBucket.length > 0) {
      for (let i=0; i<currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  }

  keys(): Array<string> {
    const resultArray = []

    for (let i=0; i < this.data.length; i++) {
      const currentBucket = this.data[i]
      if (currentBucket && currentBucket.length > 0) {
        for (let j=0; j < currentBucket.length; j++) {
          resultArray.push(currentBucket[j][0])
        }
      }
    }

    return resultArray
  }
}