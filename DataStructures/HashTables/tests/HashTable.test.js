import test from 'ava'
import HashTable from '../dist/HashTable.js'

test('#_hash should throw an error if key is not a string', t => {
  t.throws(() => new HashTable(5)._hash(1), { message: "Key must be a string"})
})
test('#_hash should always return same number given same input', t => {
  t.is(new HashTable(5)._hash('grapes'), 3)
  t.is(new HashTable(5)._hash('grapes'), 3)
})
test('#_hash should return a different number given different input', t => {
  t.is(new HashTable(5)._hash('grapes'), 3)
  t.is(new HashTable(5)._hash('apples'), 4)
})

test('#set should return the key and value saved', t => {
  const hashTable = new HashTable(5)

  t.deepEqual(hashTable.set('grapes', 50), ['grapes', 50])
})

test('#get should return the correct value', t => {
  const hashTable = new HashTable(5)
  hashTable.set('apples', 20)

  t.is(hashTable.get('apples'), 20)
})
test('#get should undefined if the key does not exist', t => {
  const hashTable = new HashTable(5)

  t.is(hashTable.get('apples'), undefined)
})

test('#keys should return all the stored keys in an array', t => {
  const hashTable = new HashTable(5)
  hashTable.set('apples', 5)
  hashTable.set('oranges', 5)
  hashTable.set('bananas', 5)

  t.notDeepEqual(hashTable.keys(), ['apples', 'oranges', 'bananas'])
})