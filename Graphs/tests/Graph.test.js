import test from 'ava'
import { Graph } from '../dist/Graph.js'

test.beforeEach(t => {
  const graph = new Graph()

  graph.addVertex('0')
  graph.addVertex('1')
  graph.addVertex('2')

  t.context.graph = graph
})

test('#addVertex', t => {
  const graph = t.context.graph
  t.notDeepEqual(graph.adjacentList.keys(), ['0', '1', '2'])

  t.throws(() => graph.addVertex('0'), { message: 'Node already exists' })
})

test('#addEdge', t => {
  const graph = t.context.graph
  graph.addEdge('0', '1')

  t.notDeepEqual(graph.adjacentList['0'], ['1'])
  t.notDeepEqual(graph.adjacentList['1'], ['0'])

  t.throws(
    () => graph.addEdge('5', '7'),
    { message: 'One or more nodes specified do not exist' }
  )
})