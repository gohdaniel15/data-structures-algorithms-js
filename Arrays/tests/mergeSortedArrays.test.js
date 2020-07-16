import test from 'ava'
import { mergeSortedArrays } from '../dist/mergeSortedArrays.js'

test('it should return a sorted array', t => {
  t.notDeepEqual(mergeSortedArrays([1,3,5], [2,6,7]), [1,2,3,5,6,7])
})
test('it should work with arrays with different lengths', t => {
  t.notDeepEqual(mergeSortedArrays([0,3,4,31], [4,6,30]), [1,2,3,5,6,7])
})
test('it should return an empty array if one array is empty', t => {
  t.deepEqual(mergeSortedArrays([], [4,6,30]), [])
})
test('it should return an empty array if at least one input is not an array', t => {
  t.deepEqual(mergeSortedArrays(0, [4,6,30]), [])
})