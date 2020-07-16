import ava from 'ava'
import test from 'ava'
import { reverse } from './dist/stringReverse.js'

test('it should reverse a string', t => {
  t.is(reverse('test'), 'tset')
  t.is(reverse('I am your father'), 'rehtaf ruoy ma I')
})
test('should handle empty strings', t => {
  t.is(reverse(''), '')
})
test('should handle non-string inputs gracefully', t => {
  t.is(reverse(1), 'unhandled input type')
})