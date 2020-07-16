import test from 'ava'
import MyArray from '../dist/array.js'

test.beforeEach(t => {
  const array = new MyArray()
  t.is(array.push('a'), 1)
  t.is(array.push('b'), 2)

  t.context.array = array
})

test('MyArray().push(item) returns the correct length', t => {
  const array = t.context.array
  t.is(array.length, 2)
})
test('MyArray().get(index) returns the correct item', t => {
  const array = t.context.array
  t.is(array.get(0), 'a')
  t.is(array.get(1), 'b')
})
test('MyArray().pop() returns the last item in the array', t => {
  const array = t.context.array
  t.is(array.pop(), 'b')
  t.is(array.pop(), 'a' )
})
test('MyArray().delete(index) returns the item deleted at the specified index', t => {
  const array = t.context.array
  array.push('c')
  array.push('d')
  t.is(array.delete(2), 'c')
  t.is(array.length, 3)
  t.is(array.get(0), 'a')
  t.is(array.get(1), 'b')
  t.is(array.get(2), 'd')
})