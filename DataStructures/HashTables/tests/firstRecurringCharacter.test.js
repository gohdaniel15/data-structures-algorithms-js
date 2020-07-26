import test from 'ava'
import { firstRecurringCharacter } from '../dist/firstRecurringCharacter.js'

test('it returns undefined when imput is a number', t => {
  t.is(firstRecurringCharacter(0), undefined)
})
test('it returns undefined when imput is an object', t => {
  t.is(firstRecurringCharacter({ a: 1 }), undefined)
})

test('it returns the first recurring character', t => {
  t.is(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]), 2)
  t.is(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]), 1)
  t.is(firstRecurringCharacter([2,3,4,5]), undefined)
})
