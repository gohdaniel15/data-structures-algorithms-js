import test from 'ava'
import { LinkedListStack, StackNode } from '../dist/LinkedListStack.js'

test('#peek returns top item value', t => {
  const stack = new LinkedListStack()

  t.is(stack.peek(), null)

  stack.push('apples')
  t.is(stack.peek(), 'apples')

  stack.push('oranges')
  t.is(stack.peek(), 'oranges')
})

test('#push first item onto the stack', t => {
  const stack = new LinkedListStack()

  stack.push('apples')
  t.is(stack.top.value, 'apples')
  t.is(stack.bottom.value, 'apples')
  t.is(stack.length, 1)
})
test('#push subsequent items onto the stack', t => {
  const stack = new LinkedListStack()

  stack.push('apples')
  stack.push('oranges')
  t.is(stack.top.value, 'oranges')
  t.is(stack.bottom.value, 'apples')
  t.is(stack.length, 2)
  
  stack.push('bananas')
  t.is(stack.top.value, 'bananas')
  t.is(stack.bottom.value, 'apples')
  t.is(stack.length, 3)

  t.is(stack.top.next.value, 'oranges')
  t.is(stack.top.next.next.value, 'apples')
  t.is(stack.top.next.next.next, null)
})

test('#pop removes top item', t => {
  const stack = new LinkedListStack()

  t.is(stack.pop(), 0)

  stack.push('apples')
  stack.push('oranges')
  stack.push('bananas')
  t.is(stack.pop(), 'bananas')
  t.is(stack.pop(), 'oranges')
  t.is(stack.pop(), 'apples')
  t.is(stack.pop(), 0)
})