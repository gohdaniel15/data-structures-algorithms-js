import test from 'ava'
import { Queue, QueueNode } from '../dist/Queue.js'

test('#peek returns first item in the queue', t => {
  const queue = new Queue()

  t.is(queue.peek(), null)

  queue.enqueue('apples')
  t.is(queue.peek(), 'apples')

  queue.enqueue('oranges')
  t.is(queue.peek(), 'apples')
})

test('#enqueue first item onto the queue', t => {
  const queue = new Queue()

  queue.enqueue('apples')
  t.is(queue.head.value, 'apples')
  t.is(queue.tail.value, 'apples')
  t.is(queue.length, 1)
})
test('#enqueue subsequent items onto the queue', t => {
  const queue = new Queue()

  queue.enqueue('apples')
  queue.enqueue('oranges')
  t.is(queue.head.value, 'apples')
  t.is(queue.tail.value, 'oranges')
  t.is(queue.length, 2)
  
  queue.enqueue('bananas')
  t.is(queue.head.value, 'apples')
  t.is(queue.tail.value, 'bananas')
  t.is(queue.length, 3)

  t.is(queue.head.next.value, 'oranges')
  t.is(queue.head.next.next.value, 'bananas')
  t.is(queue.head.next.next.next, null)
})

test('#dequeue removes top item', t => {
  const queue = new Queue()

  t.is(queue.dequeue(), 0)

  queue.enqueue('apples')
  queue.enqueue('oranges')
  queue.enqueue('bananas')
  t.is(queue.dequeue(), 'apples')
  t.is(queue.dequeue(), 'oranges')
  t.is(queue.dequeue(), 'bananas')
  t.is(queue.dequeue(), 0)
})