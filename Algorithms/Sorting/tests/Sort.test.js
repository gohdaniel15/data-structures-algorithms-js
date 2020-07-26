import test from 'ava'
import BubbleSort from '../dist/BubbleSort.js'
import SelectionSort from '../dist/SelectionSort.js'

test.beforeEach(t => {
  const input = [720581, 281166, 502986, 600780, 115587, 111002, 285569, 7163, 130191, 403572, 131179, 397911, 907564, 575761, 95838, 525387, 798957, 246577, 89438, 748819, 870200, 729004, 239881, 59353, 376572, 136308, 549790, 512798, 420776, 369234, 973719, 10841, 933355, 10613, 375010, 741133, 743163, 412440, 225414, 485910, 784186, 846288, 680935, 958468, 784197, 636556, 521797, 34781, 784397, 479065]
  const copiedInput = Array.from(input)
  const result = copiedInput.sort((a, b) => a - b)

  t.context = {
    input,
    result
  }
})

test('#BubbleSort', t => {
  const { input, result } = t.context
  t.deepEqual(BubbleSort(input), result)
})
test('#SelectionSort', t => {
  const { input, result } = t.context
  t.deepEqual(SelectionSort(input), result)
})