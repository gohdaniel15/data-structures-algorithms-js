import test from 'ava'
import { BinarySearchTree, BSTNode } from '../dist/BinarySearchTree.js'

test.beforeEach(t => {
  const bst = new BinarySearchTree()
  bst.insert(9)
  bst.insert(4)
  bst.insert(6)
  bst.insert(20)
  bst.insert(170)
  bst.insert(15)
  bst.insert(1)

  t.context.bst = bst
})

test('#insert', t => {
  const { bst } = t.context
  const result = {
    value: 9,
    left: {
      value: 4,
      left: { value: 1, left: null, right: null },
      right: { value: 6, left: null, right: null }
    },
    right: {
      value: 20,
      left: { value: 15, left: null, right: null },
      right: { value: 170, left: null, right: null }
    }
  }

  t.deepEqual(bst._traverse(bst.root), result)
})

test('#lookup', t => {
  const { bst } = t.context

  t.is(bst.lookup(4), true)
  t.is(bst.lookup(170), true)
  t.is(bst.lookup(22), false)
  t.is(bst.lookup(90), false)
})