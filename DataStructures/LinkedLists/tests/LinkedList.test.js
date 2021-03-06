import test from 'ava'
import { LinkedList, ListNode } from '../dist/LinkedList.js'

test('LinkedList head and tail should be identical when initiated', t => {
  const linkedList = new LinkedList(5)

  t.is(linkedList.head, linkedList.tail)
  t.is(linkedList.head.value, 5)
  t.is(linkedList.tail.value, 5)
})

test('#append appends to the tail', t => {
  const linkedList = new LinkedList(5)
  linkedList.append(3)
  
  t.is(linkedList.head.value, 5)
  t.is(linkedList.tail.value, 3)
  t.deepEqual(linkedList.head.next.value, 3)
  t.deepEqual(linkedList.tail.previous.value, 5)
})

test('#prepend inserts to the head', t => {
  const linkedList = new LinkedList(5)
  linkedList.prepend(3)
  
  t.is(linkedList.head.value, 3)
  t.deepEqual(linkedList.head.next.value, 5)
  t.is(linkedList.tail.value, 5)
  t.deepEqual(linkedList.tail.next, null)
  t.deepEqual(linkedList.tail.previous.value, 3)
})

test('#insert inserts (sorry) at the specified index in the start', t => {
  const linkedList = new LinkedList(5)
  linkedList.append(3)
  linkedList.append(5)
  linkedList.append(8)
  linkedList.insert(22, 0)

  t.deepEqual(linkedList.printList(), [22,5,3,5,8])
})
test('#insert inserts (sorry) at the specified index in the middle', t => {
  const linkedList = new LinkedList(5)
  linkedList.append(3)
  linkedList.append(5)
  linkedList.append(8)
  linkedList.insert(22, 2)

  t.deepEqual(linkedList.printList(), [5,3,22,5,8])
})
test('#insert inserts (sorry) at the specified index in the end', t => {
  const linkedList = new LinkedList(5)
  linkedList.append(3)
  linkedList.append(5)
  linkedList.append(8)
  linkedList.insert(22, 4)

  t.deepEqual(linkedList.printList(), [5,3,5,8,22])
})
test('#insert inserts (sorry) at the end if index is out of range', t => {
  const linkedList = new LinkedList(5)
  linkedList.append(3)
  linkedList.append(5)
  linkedList.append(8)
  linkedList.insert(22, 10)

  t.deepEqual(linkedList.printList(), [5,3,5,8,22])
})

test('#remove removes at the index specified in the start', t => {
  const linkedList = new LinkedList(5)
  linkedList.append(3)
  linkedList.append(5)
  linkedList.append(8)
  linkedList.remove(0)

  t.deepEqual(linkedList.printList(), [3,5,8])
})
test('#remove removes at the index specified in the middle', t => {
  const linkedList = new LinkedList(5)
  linkedList.append(3)
  linkedList.append(5)
  linkedList.append(8)
  linkedList.remove(2)

  t.deepEqual(linkedList.printList(), [5,3,8])
})
test('#remove removes at the index specified in the end', t => {
  const linkedList = new LinkedList(5)
  linkedList.append(3)
  linkedList.append(5)
  linkedList.append(8)
  linkedList.remove(3)

  t.deepEqual(linkedList.printList(), [5,3,5])
})

test('#printList() prints values from left to right', t => {
  const linkedList = new LinkedList(5)
  linkedList.append(3)
  linkedList.append(5)
  linkedList.append(8)

  t.deepEqual(linkedList.printList('desc'), [8,5,3,5])
})
test('#printList(desc) prints values from right to left', t => {
  const linkedList = new LinkedList(5)
  linkedList.append(3)
  linkedList.append(5)
  linkedList.append(8)

  t.deepEqual(linkedList.printList(), [5,3,5,8])
})

test('#reverse returns a new linkedList', t => {
  const linkedList = new LinkedList(1)
  linkedList.append(2)
  linkedList.append(3)
  linkedList.append(4)
  const newLinkedList = linkedList.reverse()

  t.deepEqual(newLinkedList.printList(), [4,3,2,1])
})
