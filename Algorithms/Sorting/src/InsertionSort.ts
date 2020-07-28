import { swap } from './lib/utils.js'

export default function BubbleSort(input: Array<number>): Array<number> {
  for (let i = 1; i < input.length; i++) {
    for (let j = i; j > 0; j--) {
      if (input[j] < input[j - 1]) {
        swap(input, j, j - 1)
      } else {
        break
      }
    }
  }

  return input
}